
import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'
import { FormContext, FormContextInterface } from './context'
import { FormRef, FormProps, FieldInterface, ModelInterface } from './interface'

const Form = React.forwardRef<FormRef, FormProps>((props, ref) => {
  const {
    prefixCls,
    className,
    onFinish,
    onFinishFailed,
    children,
    initialValues= {},
    ...restProps
  } = props

  const [model, setModel] = React.useState(initialValues)

  const cls = createPrefixCls('form', prefixCls)
  const classes = classnames(
    `${cls}`,
    className,
  )

  const [fields, setFields] = React.useState<FieldInterface[]>([])
  const bind = (field: FieldInterface) => {
    const { name, value } = field
    setModel(v => ({ ...v, [name]: value }))
    setFields(v => [...v, field])
  }
  const unbind = (field: FieldInterface) => {
    const { name } = field
    setModel(v => {
      delete v?.[name]
      return v
    })
    setFields(v => v.filter(item => item.name !== field.name))
  }
  const context: FormContextInterface = {
    model,
    bind,
    unbind
  }

  const setModelValue = (model: ModelInterface) => {
    setModel(v => ({...v, ...model}))
  }
  const submit = () => {
    const task = fields.map(field => field.validator())
    return Promise.allSettled(task).then(res => {
      const errors = res.filter(item => item.status === 'rejected')
        .map((item: any) => item.reason)
      if (errors.length) {
        onFinishFailed?.(errors)
        return Promise.reject(errors)
      } else {
        onFinish?.(model)
        return Promise.resolve(model)
      }
    })
  }
  React.useImperativeHandle(ref, () => ({
    setModelValue,
    submit,
  }))
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    e.stopPropagation()
    submit().catch(() => {})
  }

  return (
    <form
      {...restProps}
      action="/"
      onSubmit={handleSubmit}
      className={classes}
    >
      <FormContext.Provider
        value={context}>
        {children}
      </FormContext.Provider>
    </form>
  )
})

export default Form


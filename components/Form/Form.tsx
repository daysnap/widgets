
import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'
import {FormContext, FormContextInterface, FieldInterface, ModelInterface } from './context'

export interface FormProps {
  className?: string
  initialValues?: { [key: string]: any }
  onFinish?(values: any): void
}

export interface FormRef {
  setModelValue (model: ModelInterface): void
}

const Form = React.forwardRef<FormRef, FormProps>(({
  className,
  onFinish,
  children,
  initialValues= {},
  ...restProps
}, ref) => {

  const [model, setModel] = React.useState(initialValues)

  const cls = createPrefixCls('form')
  const classes = classnames(
    `${cls}`,
    className,
  )

  const [fields, setFields] = React.useState<FieldInterface[]>([])
  const bind = (field: FieldInterface) => {
    const { name, value } = field
    console.log('bind => ', field)
    setModel(v => ({ ...v, [name]: value }))
    setFields(v => [...v, field])
  }
  const unbind = (field: FieldInterface) => {
    const { name } = field
    delete model?.[name]
    setModel(model)
    console.log('unbind => ', field)
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
  React.useImperativeHandle(ref, () => ({
    setModelValue,
  }))
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    submit()
  }

  const submit = () => {
    console.log('submit => ', model, fields)
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


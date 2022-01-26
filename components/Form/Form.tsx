
import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'
import { FormContext, FormContextInterface, FieldInterface } from './context'

export interface FormProps {
  className?: string
  model?: { [key: string]: any }
  onFinish?(values: any): void
}

const Form: React.FC<FormProps> = ({
  className,
  onFinish,
  children,
  ...restProps
}) => {

  const [model, setModel] = React.useState(restProps.model)
  React.useEffect(() => {
    setModel(restProps.model)
  }, [restProps.model])

  const cls = createPrefixCls('form')
  const classes = classnames(
    `${cls}`,
    className,
  )

  const [fields, setFields] = React.useState<FieldInterface[]>([])
  const bind = (field: FieldInterface) => {
    const { name, value } = field
    // setModel({ ...model, [name]: value })
    setFields(v => [...v, field])
  }
  const unbind = (field: FieldInterface) => {
    const { name } = field
    delete model?.[name]
    setModel(model)
    console.log('unbind => ', field)
    setFields(fields.filter(item => item.name !== field.name))
  }

  const context: FormContextInterface = {
    model,
    bind,
    unbind
  }

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
}

export default Form



import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'
import { FormContext, FormContextInterface, FieldInterface } from './context'

export interface FormProps {
  className?: string
  onFinish?(values: any): void
}

const Form: React.FC<FormProps> = ({
  className,
  onFinish,
  children,
  ...restProps
}) => {


  const cls = createPrefixCls('form')
  const classes = classnames(
    `${cls}`,
    className,
  )

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    submit()
  }
  const submit = () => {

  }

  const [fields, setFields] = React.useState<FieldInterface[]>([])
  const bind = (field: FieldInterface) => {
    setFields(v => [...v, field])
  }
  const unbind = (field: FieldInterface) => {
    setFields(fields.filter(item => item.name !== field.name))
  }

  const context: FormContextInterface = {
    bind,
    unbind
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



import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'
import { FormContext } from './context'

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

  return (
    <form
      {...restProps}
      action="/"
      onSubmit={handleSubmit}
      className={classes}
    >
      {children}
    </form>
  )
}

export default Form


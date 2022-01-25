
import React from 'react'
import classnames from 'classnames'
import AsyncValidator from 'async-validator'
import { createPrefixCls } from '../utils/create'

export interface FormItemProps extends React.HTMLAttributes<HTMLDivElement>{
  label?: string
  rules?: any
  name?: string
  value?: any
  getValueFromEvent?: (...args: any[]) => any
}

export const getDefaultValueFromEvent = (args: any[]) => {
  const event = args[0]
  if (event && event.target && typeof event.target === 'object' && 'value' in event.target) {
    return event.target.value
  }
  return event
}

const FormItem: React.FC<FormItemProps> = ({
  className,
  label,
  children,
  rules,
  name,
  value,
  getValueFromEvent= getDefaultValueFromEvent,
  ...restProps
}) => {

  const [required, setRequired] = React.useState<boolean>(false)
  const [error, setError] = React.useState<string>()

  React.useEffect(() => {
    const required = rules?.find((item: any) => !!item.required)
    setRequired(required)
  }, [rules])

  const cls = createPrefixCls('form-item')
  const classes = classnames(
    `${cls}`,
    {
      [`is-required`]: required,
      [`is-error`]: !!error,
    },
    className,
  )

  const validate = () => {

  }
  const handleChange = (...args: any[]) => {
    const newValue = getValueFromEvent(args)
  }

  if (React.isValidElement(children)) {
    children = React.cloneElement(children, {
      value,
      onChange: handleChange
    })
  }

  return (
    <div
      {...restProps}
      className={classes}
    >
      <label className={`${cls}-label`}>{label}</label>
      {children}
      {error && <span className={`${cls}-error`}>{error}</span>}
    </div>
  )

}

export default FormItem

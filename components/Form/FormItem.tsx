
import React from 'react'
import classnames from 'classnames'
import AsyncValidator from 'async-validator'
import { createPrefixCls } from '../utils/create'
import usePrevious from '../utils/usePrevious'
import { FormContext } from './context'

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
  getValueFromEvent= getDefaultValueFromEvent,
  ...restProps
}) => {

  const [required, setRequired] = React.useState<boolean>(false)
  const [error, setError] = React.useState<string>()
  const formContext = React.useContext(FormContext)
  const value = formContext?.model?.[name]
  const [value, setValue] = React.useState<any>(restProps.value)

  React.useEffect(() => {
    if (name) {
      const value = formContext?.model?.[name]
      setValue(value)
    }
  }, [formContext?.model, name])

  const validator = () => {

  }

  const prevName = usePrevious(name)
  React.useEffect(() => {
    if (prevName !== name) {
      formContext?.unbind({ name: prevName, value, validator })
    }
    if (name) {
      formContext?.bind({ name, value, validator })
    }
    return () => {
      if (name) {
        formContext?.unbind({ name, value, validator })
      }
    }
  }, [name, prevName, value])

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

  const handleChange = (...args: any[]) => {
    const newValue = getValueFromEvent(args)
    setValue(newValue)
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

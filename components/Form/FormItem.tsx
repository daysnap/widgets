
import React from 'react'
import classnames from 'classnames'
import AsyncValidator from 'async-validator'
import { createPrefixCls } from '../utils/create'
import usePrevious from '../utils/usePrevious'
import { FormContext } from './context'
import { FormItemProps } from './interface'

export const getDefaultValueFromEvent = (args: any[]) => {
  const event = args[0]
  if (event && event.target && typeof event.target === 'object' && 'value' in event.target) {
    return event.target.value
  }
  return event
}

const FormItem: React.FC<FormItemProps> = (props) => {
  let {
    prefixCls,
    className,
    label,
    children,
    rules,
    name,
    getValueFromEvent= getDefaultValueFromEvent,
    ...restProps
  } = props

  const [required, setRequired] = React.useState<boolean>(false)
  const [error, setError] = React.useState<string>()
  const formContext = React.useContext(FormContext)
  const [value, setValue] = React.useState<any>(name ? formContext?.model?.[name] : undefined)

  React.useEffect(() => {
    if (name) {
      const value = formContext?.model?.[name]
      setValue(value)
    }
  }, [formContext?.model, name])

  const validator = React.useCallback(() => {
    if (name && rules) {
      const av = new AsyncValidator({ [name]: rules })
      return av.validate({ [name]: value }, { firstFields: true })
        .then(res => {
          setError('')
          return res
        }).catch(({ errors, fields }) => {
          const error = errors ? errors[0].message : ''
          setError(error)
          throw fields
      })
    }
    return Promise.resolve()
  }, [rules, name, value])

  const prevName = usePrevious(name)
  React.useEffect(() => {
    if (prevName !== name && prevName) {
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
  }, [name, value])

  React.useEffect(() => {
    const required = rules?.find((item: any) => !!item.required)
    setRequired(required)
  }, [rules])

  const cls = createPrefixCls('form-item', prefixCls)
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
  const handleBlurCapture = () => {
    validator().catch(() => {})
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
      onBlurCapture={handleBlurCapture}
    >
      <label className={`${cls}-label`}>{label}</label>
      {children}
      {error && <span className={`${cls}-error`}>{error}</span>}
    </div>
  )

}

export default FormItem


import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'

type RadioValueType = string | number | boolean

export interface RadioGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'defaultValue' | 'onChange'>{
  disabled?: boolean
  value?: RadioValueType
  defaultValue?: RadioValueType
  name?: string
  onChange?: (value: RadioValueType) => void
}

export interface RadioOptionType {
  value: RadioValueType
}

export interface RadioGroupContext {
  name?: string
  value?: any
  disabled?: boolean
  toggleOption: (option: RadioOptionType) => void
}

export const RadioGroupContext = React.createContext<RadioGroupContext | null>(null)

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(({
  className,
  children,
  defaultValue,
  onChange,
  disabled,
  name,
  ...restProps
}, ref) => {

  const [value, setValue] = React.useState<RadioValueType>(
    restProps.value || defaultValue || ''
  )

  React.useEffect(() => {
    if ('value' in restProps) {
      setValue(restProps.value!)
    }
  }, [restProps.value])

  const cls = createPrefixCls('radio-group')
  const classes = classnames(
    `${cls}`,
    {
      [`is-disabled`]: disabled,
    },
    className,
  )

  const toggleOption = (option: RadioOptionType) => {
    const { value } = option
    if (!('value' in restProps)) {
      setValue(value)
    }
    onChange?.(value)
  }
  const context = {
    value,
    disabled,
    name,
    toggleOption,
  }

  return (
    <div
      {...restProps}
      ref={ref}
      className={classes}
    >
      <RadioGroupContext.Provider
        value={context}
      >
        {children}
      </RadioGroupContext.Provider>
    </div>
  )
})


export default RadioGroup

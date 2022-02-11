
import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'
import { RadioGroupProps, RadioValueType, RadioOptionType } from './interface'
import { RadioGroupContext } from './context'

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>((props, ref) => {

  const {
    className,
    children,
    defaultValue,
    onChange,
    disabled,
    name,
    ...restProps
  } = props

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


import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'
import BaseInput from './BaseInput'
import fixControlledValue from './fixControlledValue'
import { InputProps } from './interface'

const Input: React.FC<InputProps> = (props) => {
  const {
    className,
    prefixCls,
    clearable= false,
    prefix,
    suffix,
    value: initialValue,
    onFocus,
    onBlur,
    onChange,
    defaultValue,
    showCount,
    maxLength,
    type = 'text',
    disabled,
    ...restProps
  } = props

  const cls = createPrefixCls('input', prefixCls)
  const classes = classnames(
    `${cls}`,
    className,
  )
  const [value, setValue] = React.useState<any>(
    fixControlledValue(typeof initialValue === 'undefined' ? defaultValue : initialValue)
  )
  const refInput = React.useRef<HTMLInputElement>(null)

  const handleClear: React.MouseEventHandler<HTMLElement> = e => {
    const event = Object.create(e)
    const currentTarget: HTMLInputElement = refInput.current?.cloneNode(true) as HTMLInputElement
    event.target = currentTarget
    event.currentTarget = currentTarget
    currentTarget.value = ''
    handleChange(event)
  }
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    setValue(e.target.value)
    onChange?.(e)
  }
  const focus = (options?: FocusOptions) => {
    refInput.current?.focus(options)
  }

  React.useEffect(() => {
    setValue(fixControlledValue(initialValue))
  }, [initialValue])

  const element = (
    <input
      {...restProps}
      disabled={disabled}
      maxLength={maxLength}
      ref={refInput}
      value={value}
      className={classes}
      type={type}
      onChange={handleChange}
    />
  )

  return (
    <BaseInput
      value={value}
      disabled={disabled}
      clearable={clearable}
      prefix={prefix}
      suffix={suffix}
      prefixCls={cls}
      element={element}
      onClear={handleClear}
      triggerFocus={focus}
      showCount={showCount}
      maxLength={maxLength}
    />
  )
}

export default Input


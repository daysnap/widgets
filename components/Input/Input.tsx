
import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'
import BaseInput from './BaseInput'

export function fixControlledValue<T>(value: T) {
  if (typeof value === 'undefined' || value === null) {
    return ''
  }
  return value
}

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix'>{
  className?: string
  clearable?: boolean
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  defaultValue?: string
  showWordLimit?: boolean
  maxLength?: number
}

const Input: React.FC<InputProps> = ({
  className,
  clearable= false,
  prefix,
  suffix,
  value: initialValue,
  onFocus,
  onBlur,
  onChange,
  defaultValue,
  showWordLimit,
  maxLength,
  type = 'text',
  ...restProps
}) => {

  const cls = createPrefixCls('input')
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
      clearable={clearable}
      prefix={prefix}
      suffix={suffix}
      prefixCls={cls}
      element={element}
      onClear={handleClear}
      triggerFocus={focus}
      showWordLimit={showWordLimit}
      maxLength={maxLength}
    />
  )
}

export default Input


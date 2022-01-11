
import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'
import BaseInput from './BaseInput'

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix' | 'type'>{
  className?: string
  clearable?: boolean
  prefix?: React.ReactNode
  suffix?: React.ReactNode
}

const Input: React.FC<InputProps> = ({
  className,
  clearable= false,
  prefix,
  suffix,
  value,
  onFocus,
  onBlur,
  ...restProps
}) => {

  const cls = createPrefixCls('input')
  const classes = classnames(
    `${cls}`,
    className,
  )
  const [focused, setFocused] = React.useState<boolean>(false)

  const handleClear: React.MouseEventHandler<HTMLElement> = e => {

  }
  const handleFocus: React.FocusEventHandler<HTMLInputElement> = e => {
    console.log(222)
    setFocused(true)
  }
  const handleBlur: React.FocusEventHandler<HTMLInputElement> = e => {
    setFocused(false)
  }
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {

  }

  const element = (
    <input
      {...restProps}
      value={value}
      className={classes}
      type="text"
      onFocus={handleFocus}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  )

  return (
    <BaseInput
      value={value}
      focused={focused}
      clearable={clearable}
      prefix={prefix}
      suffix={suffix}
      prefixCls={cls}
      element={element}
      onClear={handleClear}
    />
  )
}

export default Input


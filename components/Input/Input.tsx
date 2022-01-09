
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
  ...restProps
}) => {

  const cls = createPrefixCls('input')
  const classes = classnames(
    `${cls}`,
    className,
  )

  const element = (
    <input
      {...restProps}
      className={classes}
      type="text"
    />
  )

  return (
    <BaseInput
      clearable={clearable}
      prefix={prefix}
      suffix={suffix}
      prefixCls={cls}
      element={element}
    />
  )
}

export default Input


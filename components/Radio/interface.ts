
import React from 'react'

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement>{
  prefixCls?: string
  children?: React.ReactNode
  value?: any
}

export type RadioValueType = string | number | boolean

export interface RadioGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'defaultValue' | 'onChange'>{
  prefixCls?: string
  disabled?: boolean
  value?: RadioValueType
  defaultValue?: RadioValueType
  name?: string
  onChange?: (value: RadioValueType) => void
}

export interface RadioOptionType {
  value: RadioValueType
}

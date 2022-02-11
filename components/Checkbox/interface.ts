import React from 'react'

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement>{
  prefixCls?: string
  children?: React.ReactNode
  value?: any
}

export type CheckboxValueType = string | number | boolean

export interface CheckboxGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'defaultValue' | 'onChange'>{
  prefixCls?: string
  disabled?: boolean
  value?: Array<CheckboxValueType>
  defaultValue?: Array<CheckboxValueType>
  children?: React.ReactNode
  name?: string
  onChange?: (value: Array<CheckboxValueType>) => void
}

export interface CheckboxOptionType {
  value: CheckboxValueType
}

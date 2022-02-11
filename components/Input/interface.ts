
import React from 'react'

export interface BaseInputProps {
  prefixCls: string
  clearable?: boolean
  element: React.ReactElement
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  value?: any
  onClear?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
  triggerFocus?: () => void
  showCount?: boolean
  disabled?: boolean
  maxLength?: number
}

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix'>{
  prefixCls?: string
  clearable?: boolean
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  defaultValue?: string
  showCount?: boolean
}

export interface PasswordProps extends Omit<InputProps, 'type'> {
  showPassword?: boolean
}

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>{
  prefixCls?: string
  showCount?: boolean
  autosize?: boolean
}

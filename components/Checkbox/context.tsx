
import React from 'react'
import { CheckboxOptionType } from './interface'

export interface CheckboxGroupContext {
  name?: string
  value?: any
  disabled?: boolean
  toggleOption: (option: CheckboxOptionType) => void
  registerValue: (val: string) => void
  cancelValue: (val: string) => void
}

export const CheckboxGroupContext = React.createContext<CheckboxGroupContext | null>(null)

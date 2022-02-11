
import React from 'react'
import { RadioOptionType } from './interface'

export interface RadioGroupContext {
  name?: string
  value?: any
  disabled?: boolean
  toggleOption: (option: RadioOptionType) => void
}

export const RadioGroupContext = React.createContext<RadioGroupContext | null>(null)

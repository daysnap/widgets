
import React from 'react'

export interface FieldInterface {
  value?: any
  name?: any
  validator?: any
}

export interface FormContextInterface {
  bind (field: FieldInterface): void
  unbind (field: FieldInterface): void
}

export const FormContext = React.createContext<FormContextInterface | null>(null)

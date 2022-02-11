
import React from 'react'
import { ModelInterface, FieldInterface } from './interface'

export interface FormContextInterface {
  model?: ModelInterface
  bind (field: FieldInterface): void
  unbind (field: FieldInterface): void
}

export const FormContext = React.createContext<FormContextInterface | null>(null)

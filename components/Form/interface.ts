
import React from 'react'

export interface FormItemProps extends React.HTMLAttributes<HTMLDivElement>{
  prefixCls?: string
  label?: string
  rules?: any
  name?: string
  value?: any
  getValueFromEvent?: (...args: any[]) => any
}

export interface FieldInterface {
  value?: any
  name?: any
  validator?: any
}

export interface ModelInterface {
  [key: string]: any
}

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement>{
  prefixCls?: string
  initialValues?: { [key: string]: any }
  onFinish?(values: any): void
  onFinishFailed?(error: any): void
}

export interface FormRef {
  setModelValue (model: ModelInterface): void
  submit(): Promise<any>
}

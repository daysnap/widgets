
import React from 'react'
import { Icon } from '../Icon'

export interface BaseInputProps {
  prefixCls: string
  clearable?: boolean
  element: React.ReactElement
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  value?: any
  handleReset?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

const BaseInput: React.FC<BaseInputProps> = ({
  prefixCls,
  clearable,
  element,
  prefix,
  suffix,
  value,
  handleReset,
}) => {

  const prefixElement = () => {
    if (prefix) {
      return <span className={`${prefixCls}-prefix`}>{prefix}</span>
    }
  }
  const suffixElement = () => {
    if (value && clearable) {
      suffix = <Icon onClick={handleReset} icon="icon-close"/>
    }
    if (suffix) {
      return <span className={`${prefixCls}-suffix`}>{suffix}</span>
    }
  }

  if (suffix || prefix || clearable) {
    element = (
      <div
        className={`${prefixCls}-wrapper`}
      >
        {prefixElement()}
        {element}
        {suffixElement()}
      </div>
    )
  }

  return element
}

export default BaseInput

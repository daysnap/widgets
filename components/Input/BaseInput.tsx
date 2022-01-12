
import React from 'react'
import classnames from 'classnames'
import { Icon } from '../Icon'

export interface BaseInputProps {
  prefixCls: string
  clearable?: boolean
  element: React.ReactElement
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  value?: any
  onClear?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
  triggerFocus?: () => void
  showWordLimit?: boolean
  maxLength?: number
}

const BaseInput: React.FC<BaseInputProps> = ({
  prefixCls,
  clearable,
  element,
  prefix,
  suffix,
  value,
  onClear,
  triggerFocus,
  showWordLimit,
  maxLength
}) => {

  const beforeElement = () => {
    if (prefix) {
      return <span className={`${prefixCls}-prefix`}>{prefix}</span>
    }
  }
  const afterElement = () => {
    if (suffix) {
      suffix = <span className={`${prefixCls}-suffix`}>{suffix}</span>
    }
    if (showWordLimit && ![null, undefined].includes(maxLength as any)) {
      suffix = (
        <>
          <span className={`${prefixCls}-count`}>{value ? value.length : 0}/{maxLength}</span>
          {suffix}
        </>
      )
    }
    if (value && clearable) {
      suffix = (
        <>
          <Icon
            className={`${prefixCls}-clear`}
            onClick={onClear}
            onMouseDown={e => e.preventDefault()}
            icon="icon-close"
          />
          {suffix}
        </>
      )
    }
    return suffix
  }

  if (!suffix && !prefix && !clearable) {
    return element
  }

  const [focused, setFocused] = React.useState<boolean>(false)
  const cls = `${prefixCls}-wrapper`
  const classes = classnames(
    cls,
    {
      [`is-focused`]: focused
    }
  )
  const handleMouseUp: React.MouseEventHandler = e => {
    setFocused(true)
    triggerFocus?.()
  }
  const handleFocus: React.FocusEventHandler<HTMLInputElement> = e => {
    setFocused(true)
    element.props.onFocus?.(e)
  }
  const handleBlur: React.FocusEventHandler<HTMLInputElement> = e => {
    setFocused(false)
    element.props.onBlur?.(e)
  }

  return (
    <div
      onMouseUp={handleMouseUp}
      className={classes}
    >
      {beforeElement()}
      {
        React.cloneElement(element, {
          onFocus: handleFocus,
          onBlur: handleBlur,
        })
      }
      {afterElement()}
    </div>
  )
}

export default BaseInput

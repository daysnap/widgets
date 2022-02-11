
import React from 'react'
import classnames from 'classnames'
import { Icon } from '../Icon'
import { BaseInputProps } from './interface'

const BaseInput: React.FC<BaseInputProps> = (props) => {
  let {
    prefixCls,
    clearable,
    element,
    prefix,
    suffix,
    value,
    onClear,
    triggerFocus,
    showCount,
    disabled,
    maxLength
  } = props

  const beforeElement = () => {
    if (prefix) {
      return <span className={`${prefixCls}-prefix`}>{prefix}</span>
    }
  }
  const afterElement = () => {
    if (suffix) {
      suffix = <span className={`${prefixCls}-suffix`}>{suffix}</span>
    }
    if (showCount && ![null, undefined].includes(maxLength as any)) {
      suffix = (
        <>
          <span className={`${prefixCls}-count`}>{value ? value.length : 0}/{maxLength}</span>
          {suffix}
        </>
      )
    }
    if (value && clearable && !disabled) {
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
      [`is-focused`]: focused,
      [`is-disabled`]: disabled,
    }
  )
  const handleMouseUp: React.MouseEventHandler = e => {
    if (disabled) return
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

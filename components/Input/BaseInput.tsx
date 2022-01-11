
import React from 'react'
import ReactDOM from 'react-dom'
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
}

const BaseInput: React.FC<BaseInputProps> = ({
  prefixCls,
  clearable,
  element,
  prefix,
  suffix,
  value,
  onClear,
  triggerFocus
}) => {

  const prefixElement = () => {
    if (prefix) {
      return <span className={`${prefixCls}-prefix`}>{prefix}</span>
    }
  }
  const suffixElement = () => {
    if (value && clearable) {
      suffix = <Icon onClick={onClear} icon="icon-close"/>
    }
    if (suffix) {
      return <span className={`${prefixCls}-suffix`}>{suffix}</span>
    }
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
  }
  const handleFocus: React.FocusEventHandler<HTMLInputElement> = e => {
    console.log('e => ', e, element)
    // setFocused(true)
    // element.props.onFocus(e)
    const d = ReactDOM.findDOMNode(element.props.ref)
  }
  const handleBlurs: React.FocusEventHandler<HTMLInputElement> = e => {
    setFocused(false)
  }

  return (
    <div
      onMouseUp={handleMouseUp}
      className={classes}
    >
      {prefixElement()}
      {
        React.cloneElement(element, {
          onFocus: handleFocus
        })
      }
      {suffixElement()}
    </div>
  )
}

export default BaseInput

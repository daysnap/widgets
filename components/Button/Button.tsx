
import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'
import Icon from '../Icon'
import { ButtonProps, Children } from './interface'

const Button = React.forwardRef<unknown, ButtonProps>((props, ref) => {
  const {
    type = 'default',
    plain= false,
    disabled= false,
    loading = false,
    children,
    className,
    icon,
    prefixCls,
    href,
    onClick,
    htmlType= 'button',
    ...restProps
  } = props

  const cls = createPrefixCls('button', prefixCls)
  const classes = classnames(
    `${cls}`,
    `${cls}-${type}`,
    {
      [`is-icon-only`]: !children && children !== 0,
      [`is-plain`]: plain,
      [`is-loading`]: loading,
      [`is-disabled`]: disabled,
    },
    className,
  )

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
    if (loading || disabled) {
      e.preventDefault()
      return
    }
    onClick?.(e)
  }

  const iconNode = icon && !loading ? <Icon icon={icon}/> : loading ? <Icon.Loading/> : null

  if (typeof children === 'function') {
    return (children as Children)({ className: classes, onClick: handleClick, icon: iconNode })
  }

  if (href) {
    return (
      <a
        {...restProps}
        className={classes}
        onClick={handleClick}
        href={href}
        ref={ref as any}
      >
        {iconNode}
        {children}
      </a>
    )
  }

  return (
    <button
      {...restProps}
      type={htmlType}
      className={classes}
      disabled={disabled}
      onClick={handleClick}
      ref={ref as any}
    >
      {iconNode}
      {children}
    </button>
  )
})

Button.displayName = 'Button'

export default Button


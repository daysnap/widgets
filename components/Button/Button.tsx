
import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'
import { Icon } from '../Icon'
// 基础
export interface BaseButtonProps {
  type?: 'default' | 'primary' | 'danger' | 'warning' | 'success' | 'text'
  plain?: boolean
  disabled?: boolean
  loading?: boolean
  children?: React.ReactNode | React.ReactNode []
  className?: string
  icon?: string
}

// 链接按钮
export type AnchorButtonProps = {
  href: string
  target?: string
  onClick?: React.MouseEventHandler<HTMLElement>
} & BaseButtonProps & Omit<React.ButtonHTMLAttributes<any>, 'type' | 'onClick'>

// 原生按钮
export type NativeButtonProps = {
  htmlType?: 'submit' | 'button' | 'reset'
  onClick?: React.MouseEventHandler<HTMLElement>
} & BaseButtonProps & Omit<React.ButtonHTMLAttributes<any>, 'type' | 'onClick'>

export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>

const Button: React.FC<ButtonProps> = ({
  type = 'default',
  plain= false,
  disabled= false,
  loading = false,
  children,
  className,
  icon,
  href,
  onClick,
  ...restProps
}) => {

  const cls = createPrefixCls('button')
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

  if (href) {
    return (
      <a
        {...restProps}
        className={classes}
        onClick={handleClick}
        href={href}
      >
        {iconNode}
        {children}
      </a>
    )
  }

  return (
    <button
      {...restProps}
      className={classes}
      disabled={disabled}
      onClick={handleClick}
    >
      {iconNode}
      {children}
    </button>
  )
}

export default Button


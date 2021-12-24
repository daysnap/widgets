
import React, { useState, ReactNode } from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'
import { Icon } from '../Icon'
// 基础
export interface BaseButtonProps {
  type?: 'default' | 'primary' | 'danger' | 'warning' | 'success'
  dashed?: boolean
  disabled?: boolean
  loading?: boolean
  children?: ReactNode | ReactNode []
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
  dashed = false,
  disabled= false,
  loading: initialLoading = false,
  children,
  className,
  icon,
  onClick,
  ...restProps
}) => {

  const [loading] = useState(initialLoading)
  const cls = createPrefixCls('button')
  const classes = classnames(
    `${cls}`,
    `${cls}-${type}`,
    {
      [`${cls}-loading`]: loading,
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

  const iconNode = icon && !loading

  return (
    <button
      {...restProps}
      className={classes}
      onClick={handleClick}
    >
      {iconNode}
      {children}
    </button>
  )
}

export default Button



import React, { useState, ReactNode } from 'react'
import classnames from 'classnames'
import Icon from '../../components/Icon'
import { createPrefixCls } from '../../utils/create'

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

  const cls = createPrefixCls('btn')
  const [loading] = useState(initialLoading)
  const classes = classnames(
    className,
    `${cls}`,
    `${cls}-${type}`,
    {
      [`${cls}-loading`]: loading,
      [`${cls}-disabled`]: disabled,
    }
  )

  const iconNode =
    icon && !loading
      ? <Icon icon={icon}/>
      : <Icon.Loading/>

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
    if (loading || disabled) {
      e.preventDefault()
      return
    }
    onClick?.(e)
  }

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

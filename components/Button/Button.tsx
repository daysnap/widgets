
import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'
import { Icon } from '../Icon'

interface ChildrenProps extends Pick<ButtonProps, 'className' | 'onClick'>{
  icon?: React.ReactNode
}

type Children = (props: ChildrenProps) => React.ReactElement

// 基础
export interface BaseButtonProps {
  type?: 'default' | 'primary' | 'danger' | 'warning' | 'success' | 'text'
  plain?: boolean
  disabled?: boolean
  loading?: boolean
  children?: React.ReactNode | React.ReactNode [] | Children
  className?: string
  icon?: string
  prefixCls?: string
}

// 链接按钮
export type AnchorButtonProps = {
  href: string
  target?: string
  onClick?: React.MouseEventHandler<HTMLElement>
} & BaseButtonProps & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'type' | 'onClick'>

// 原生按钮
export type NativeButtonProps = {
  htmlType?: 'submit' | 'button' | 'reset'
  onClick?: React.MouseEventHandler<HTMLElement>
} & BaseButtonProps & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'onClick'>

export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>

const Button = React.forwardRef<unknown, ButtonProps>(({
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
  ...restProps
}, ref) => {

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

export default Button


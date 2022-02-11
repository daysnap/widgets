
import React from 'react'

interface ChildrenProps extends Pick<ButtonProps, 'className' | 'onClick'>{
  icon?: React.ReactNode
}

export type Children = (props: ChildrenProps) => React.ReactElement

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

import React from 'react'
import { ButtonProps } from '../Button'

export interface DropdownProps {
  prefixCls?: string
  className?: string
  placement?: 'bottomLeft' | 'bottomCenter' | 'bottomRight' | 'topLeft' | 'topCenter' | 'topRight'
  trigger?: 'hover' | 'click'
  disabled?: boolean
  children?: React.ReactNode
}

export interface DropdownDividerProps extends React.HTMLAttributes<HTMLDivElement>{
  prefixCls?: string
}

export interface DropdownItemProps extends ButtonProps {}

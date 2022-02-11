
import React from 'react'

export interface TooltipProps {
  prefixCls?: string
  className?: string
  placement?: 'left' | 'right' | 'top' | 'bottom' | 'topLeft' | 'leftTop' | 'topRight' | 'rightTop' | 'bottomRight' | 'rightBottom' | 'bottomLeft' | 'leftBottom'
  children?: React.ReactNode
  title?: string
}

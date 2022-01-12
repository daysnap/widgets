
import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'
import Trigger from '../Trigger'
import Placements from './placements'

export interface TooltipProps {
  className?: string
  placement?: 'bottomLeft' | 'bottomCenter' | 'bottomRight' | 'topLeft' | 'topCenter' | 'topRight'
  children?: React.ReactNode
  title?: string
}

const Tooltip: React.FC<TooltipProps> = ({
  className,
  placement= 'bottomLeft',
  children,
  title,
  ...restProps
}) => {

  const cls = createPrefixCls('tooltip')
  const classes = classnames(
    `${cls}`,
    className,
  )
  const overlay = (
    <span
      className={classes}>
      {title}
    </span>
  )

  return (
    <Trigger
      prefixCls={cls}
      className={classes}
      align={Placements[placement]}
      action="hover"
      placements={Placements}
    >
      {children}
      {overlay}
    </Trigger>
  )
}

export default Tooltip


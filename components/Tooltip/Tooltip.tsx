
import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'
import Trigger from '../Trigger'
import Placements from './placements'

export interface TooltipProps {
  className?: string
  placement?: 'left' | 'right' | 'top' | 'bottom' | 'topLeft' | 'leftTop' | 'topRight' | 'rightTop' | 'bottomRight' | 'rightBottom' | 'bottomLeft' | 'leftBottom'
  children?: React.ReactNode
  title?: string
}

const Tooltip: React.FC<TooltipProps> = ({
  className,
  placement= 'top',
  children,
  title,
  ...restProps
}) => {

  const cls = createPrefixCls('tooltip')
  const classes = classnames(
    `${cls}`,
    className,
  )
  const overlay = [
    <div className={`${cls}-content`} key="content">
      <div className={`${cls}-arrow`} key="arrow">
        <i className={`${cls}-arrow-content`}/>
      </div>
      {title}
    </div>
  ]

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


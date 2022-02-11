
import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'
import Trigger from '../Trigger'
import Placements from './placements'
import { TooltipProps } from './interface'

const Tooltip: React.FC<TooltipProps> = (props) => {

  const {
    className,
    prefixCls,
    placement= 'top',
    children,
    title,
    ...restProps
  } = props

  const cls = createPrefixCls('tooltip', prefixCls)
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



import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'

export interface TooltipProps {
  className?: string
}

const Tooltip: React.FC<TooltipProps> = ({
  className,
  ...restProps
}) => {

  const cls = createPrefixCls('tooltip')
  const classes = classnames(
    `${cls}`,
    className,
  )

  return (
    <div
      {...restProps}
      className={classes}
    />
  )
}

export default Tooltip


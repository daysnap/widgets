
import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'

export interface PortalProps {
  className?: string
}

const Portal: React.FC<PortalProps> = ({
  className,
  ...restProps
}) => {

  const cls = createPrefixCls('portal')
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

export default Portal


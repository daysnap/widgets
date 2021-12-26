
import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'

export interface BounceLoadingProps {
  className?: string
}

const BounceLoading: React.FC<BounceLoadingProps> = ({
  className,
  ...restProps
}) => {

  const cls = createPrefixCls('bounce-loading')
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

export default BounceLoading


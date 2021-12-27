
import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'

export interface BounceLoadingProps {
  className?: string,
  count?: number
}

const BounceLoading: React.FC<BounceLoadingProps> = ({
  className,
  count= 4,
  ...restProps
}) => {

  const cls = createPrefixCls('bounce-loading')
  const classes = classnames(
    `${cls}`,
    className,
  )
  const children = React.useMemo(() =>
    new Array(count).fill('.').map((item, index) =>
      <li className={`${cls}-dot`} key={index} style={{ animationDelay: `-${0.1 * index}s` }}/>
    ),
    [count]
  )

  return (
    <ul
      {...restProps}
      className={classes}
    >
      {children}
    </ul>
  )
}

export default BounceLoading


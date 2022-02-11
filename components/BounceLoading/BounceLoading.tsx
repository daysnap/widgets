
import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'
import { BounceLoadingProps } from './interface'

const BounceLoading: React.FC<BounceLoadingProps> = (props) => {
  const {
    className,
    count= 4,
    ...restProps
  } = props

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


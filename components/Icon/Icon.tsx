
import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'
import { IconProps } from './interface'

const Icon = React.forwardRef<HTMLElement, IconProps>((props, ref) => {
  const {
    className,
    icon,
    prefixCls,
    ...restProps
  } = props

  const cls = createPrefixCls('icon', prefixCls)
  const classes = classnames(
    `iconfont`,
    cls,
    icon,
    className,
  )

  return (
    <i
      {...restProps}
      ref={ref}
      className={classes}
    />
  )
})

export default Icon


import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'

export interface IconProps extends React.HTMLAttributes<HTMLElement>{
  icon?: string,
}

const Icon = React.forwardRef<HTMLElement, IconProps>(({
  className,
  icon,
  ...restProps
}, ref) => {
  const cls = createPrefixCls('icon')
  const classes = classnames(
    `iconfont`,
    `${cls}`,
    `${icon}`,
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


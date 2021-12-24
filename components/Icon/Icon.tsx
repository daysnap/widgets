
import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'

export interface IconProps {
  className?: string,
  icon?: string,
}

const Icon: React.FC<IconProps> = ({
  icon,
  className,
  ...restProps
}) => {

  const cls = createPrefixCls('icon')

  const classes = classnames(
    `iconfont`,
    `${cls}`,
    `${icon}`,
    className,
  )

  return (
    <i className={classes} {...restProps}/>
  )

}

export default Icon

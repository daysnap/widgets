
import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'
import Icon from './Icon'
import { IconLoadingProps } from './interface'

const IconLoading = React.forwardRef<HTMLElement, IconLoadingProps>((props) => {
  const {
    className,
    prefixCls,
    icon = 'icon-loading2',
    ...restProps
  } = props

  const cls = createPrefixCls('icon-loading', prefixCls)
  const classes = classnames(
    cls,
    className
  )

  return (
    <Icon
      {...restProps}
      className={classes}
      icon={icon}
    />
  )
})

export default IconLoading

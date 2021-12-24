
import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../../utils/create'
import Icon, { IconProps } from './Icon'

export type IconLoadingProps = IconProps

const IconLoading: React.FC<IconLoadingProps> = ({
  className,
  icon= 'icon-loading',
  ...restProps
}) => {

  const cls = createPrefixCls('icon-loading')
  const classes = classnames(
    `${cls}`,
    className,
  )

  return (
    <Icon
      {...restProps}
      className={classes}
      icon={icon}
    />
  )

}

export default IconLoading

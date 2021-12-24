
import React, { ReactNode, ReactElement } from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../../utils/create'

export interface DropdownItemProps {
  className?: string,
  disabled?: boolean,
  children?: ReactNode | ReactNode []
}

const DropdownItem: React.FC<DropdownItemProps> = ({
  className,
  disabled = false,
  children,
  ...restProps
}) => {

  const cls = createPrefixCls('dropdown-menu-item')
  const classes = classnames(
    `${cls}`,
    className
  )

  if (!Array.isArray(children) && typeof children === 'object') {
    return React.cloneElement(children as ReactElement, {
      className: classes,
      ...restProps,
    })
  }

  return (
    <div className={classes} {...restProps}>{children}</div>
  )
}

export default DropdownItem

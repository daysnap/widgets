
import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'

export interface DropdownItemProps extends React.HTMLAttributes<HTMLDivElement>{
  className?: string
  disabled?: boolean
}

const Dropdown: React.FC<DropdownItemProps> = ({
  className,
  disabled= false,
  children,
  ...restProps
}) => {

  const cls = createPrefixCls('dropdown-item')
  const classes = classnames(
    `${cls}`,
    {
      [`is-disabled`]: disabled,
    },
    className,
  )

  if (children && React.Children.count(children) === 1 && typeof children === 'object') {
    return React.cloneElement(children!, {
      className: classes,
      ...restProps,
    })
  }

  return (
    <div
      {...restProps}
      className={classes}
    />
  )
}

export default Dropdown


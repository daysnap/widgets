
import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'

export interface DropdownItemProps {
  className?: string
}

const Dropdown: React.FC<DropdownItemProps> = ({
  className,
  ...restProps
}) => {

  const cls = createPrefixCls('dropdown-item')
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

export default Dropdown



import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'

export interface DropdownDividerProps {
  className?: string
}

const Dropdown: React.FC<DropdownDividerProps> = ({
  className,
  ...restProps
}) => {

  const cls = createPrefixCls('dropdown-divider')
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


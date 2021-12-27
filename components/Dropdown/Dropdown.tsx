
import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'

export interface DropdownProps {
  className?: string
}

const Dropdown: React.FC<DropdownProps> = ({
  className,
  ...restProps
}) => {

  const cls = createPrefixCls('dropdown')
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


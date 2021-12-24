
import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'

const DropdownDivider: React.FC<{
  className?: string
}> = ({
  className
}) => {

  const cls = createPrefixCls('dropdown-divider')
  const classes = classnames(
    `${cls}`,
    className,
  )

  return (
    <div className={classes}/>
  )
}

export default DropdownDivider

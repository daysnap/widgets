
import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'

export interface DropdownProps {
  className?: string
  placement?: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end'
  trigger?: 'hover' | 'click'
  disabled?: boolean,
  children?: React.ReactNode
}

const Dropdown: React.FC<DropdownProps> = ({
  className,
  placement= 'bottom-end',
  trigger = 'hover',
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


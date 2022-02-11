
import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'
import { DropdownDividerProps } from './interface'

const Dropdown: React.FC<DropdownDividerProps> = (props) => {
  const {
    className,
    prefixCls,
    ...restProps
  } = props

  const cls = createPrefixCls('dropdown-divider', prefixCls)
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


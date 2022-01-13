
import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'

export interface CheckboxProps {
  className?: string
}

const Checkbox: React.FC<CheckboxProps> = ({
  className,
  ...restProps
}) => {

  const cls = createPrefixCls('checkbox')
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

export default Checkbox


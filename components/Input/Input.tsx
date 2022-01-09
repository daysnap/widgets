
import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'

export interface InputProps {
  className?: string
}

const Input: React.FC<InputProps> = ({
  className,
  ...restProps
}) => {

  const cls = createPrefixCls('input')
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

export default Input


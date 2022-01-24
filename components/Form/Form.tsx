
import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'

export interface FormProps {
  className?: string
}

const Form: React.FC<FormProps> = ({
  className,
  ...restProps
}) => {

  const cls = createPrefixCls('form')
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

export default Form


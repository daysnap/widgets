
import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'

export interface RadioProps {
  className?: string
}

const Radio: React.FC<RadioProps> = ({
  className,
  ...restProps
}) => {

  const cls = createPrefixCls('radio')
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

export default Radio


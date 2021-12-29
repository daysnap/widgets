
import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'

export interface TriggerProps {
  className?: string
}

const Trigger: React.FC<TriggerProps> = ({
  className,
  ...restProps
}) => {

  const cls = createPrefixCls('trigger')
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

export default Trigger


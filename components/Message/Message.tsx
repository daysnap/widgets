
import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'

export interface MessageProps {
  className?: string
}

const Message: React.FC<MessageProps> = ({
  className,
  ...restProps
}) => {

  const cls = createPrefixCls('message')
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

export default Message


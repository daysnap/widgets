
import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'
import { MessageProps } from './interface'

const Message: React.FC<MessageProps> = props => {
  const {
    prefixCls,
    className
  } = props

  const cls = createPrefixCls('button', prefixCls)
  const classes = classnames(
    cls,
    className,
  )

  return (
    <>Message</>
  )
}

export default Message


import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'
import Icon from '../Icon'
import { createPortal } from 'react-dom'

export interface MessageProps {
  className?: string
}

export interface MessageType {
  id?: number
  delayed?: number
  type?: string
  content?: string
  timer?: number
}

export interface MessageRef {
  add: (message: MessageType) => void
  remove: (id: number) => void
}

const Message: React.FC<MessageProps> = React.forwardRef<MessageRef, MessageProps>(({
  className,
}, ref) => {

  const [messages, setMessages] = React.useState<MessageType[]>([])

  const cls = createPrefixCls('message')
  const classes = classnames(
    `${cls}`,
    className,
  )

  const add = (message: MessageType) => {
    message = Object.assign({ id: Date.now(), delayed: 3000 }, message)
    if (message.delayed! > 0) {
      message.timer = setTimeout(remove, message.delayed, message.id)
    }
    setMessages([...messages, message])
  }
  const remove = (id: number) => {
    const item = messages.find(item => item.id === id)
    clearTimeout(item?.timer)
    setMessages(messages.filter(item => item.id === id))
  }
  React.useImperativeHandle(ref, () => ({ add, remove }))

  const children = messages.map((item, index) => {
    const { content, type } = item
    return (
      <li style={{top: `${20 * (index + 1)}px`}}>
        <Icon icon={`icon-${type}`}/>
        <span>{content}</span>
      </li>
    )
  })

  return (
    <ul className={classes}>
      {children}
    </ul>
  )
})

let instance: MessageRef | null
function createInstance () {
  if (!instance) {
    const instance = React.useRef<any>()
    createPortal(<Message ref={instance}/>, document.body)
  }
  return instance
}


export default Message



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
  duration?: number
  type?: string
  content?: string
  timer?: number
}

export interface MessageRef {
  add: (message: MessageType) => void
  remove: (id: number) => void
}

const Message = React.forwardRef<MessageRef, MessageProps>(({
  className,
}, ref) => {

  const [messages, setMessages] = React.useState<MessageType[]>([])

  const cls = createPrefixCls('message')
  const classes = classnames(
    `${cls}`,
    className,
  )

  const add = (message: MessageType) => {
    message = Object.assign({ id: Date.now(), duration: 3000 }, message)
    if (message.duration! > 0) {
      message.timer = setTimeout(remove, message.duration, message.id)
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

let instance: React.RefObject<MessageRef>
export function getInstance () {
  instance = React.useRef<MessageRef>(null)
  if (!instance.current) {
    createPortal(<Message ref={instance}/>, document.body)
  }
  return instance.current
}

const api: any = {}

;['info', 'error', 'warn', 'success'].forEach(type => {
  api[type] = (options: MessageType | string) => {
    if (typeof options === 'string') {
      options = { content: options }
    }
    getInstance()?.add({ ...options, type })
  }
})

export interface Api {
  info(options: MessageType | string) : void
  error(options: MessageType | string) : void
  warn(options: MessageType | string) : void
  success(options: MessageType | string) : void
}

export default api as Api


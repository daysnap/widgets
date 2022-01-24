
import React from 'react'
import ReactDOM from 'react-dom'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'
import Icon from '../Icon'

export interface MessageProps {}

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

const Message = React.forwardRef<MessageRef, MessageProps>((props, ref) => {

  const [messages, setMessages] = React.useState<MessageType[]>([])

  const add = (message: MessageType) => {
    message = Object.assign({ id: Date.now(), duration: 3000 }, message)
    if (message.duration! > 0) {
      message.timer = setTimeout(remove, message.duration, message.id)
    }
    setMessages(v => [...v, message])
    return () => remove(message.id!)
  }
  const remove = (id: number) => {
    setMessages(v => v.filter(item => item.id !== id))
  }
  React.useImperativeHandle(ref, () => ({ add, remove }))

  const cls = createPrefixCls('message')
  const children = messages.map(item => {
    const { content, type, id } = item
    const classes = classnames(
      `${cls}`,
      `${cls}-${type}`,
      `is-in`
    )
    return (
      <li
        className={classes}
        key={id}
      >
        <Icon className={`${cls}-icon`} icon={`icon-${type}`}/>
        <span>{content}</span>
      </li>
    )
  })

  return (
    <ul className={`${cls}-warp`}>
      {children}
    </ul>
  )
})

let instance: { current: MessageRef | null } = { current: null }
export function getInstance () {
  if (!instance.current) {
    const div = document.createElement('div')
    document.body.append(div)
    ReactDOM.render(<Message ref={instance}/>, div)
  }
  return instance.current
}

const api: any = {}

;['info', 'error', 'warn', 'success'].forEach(type => {
  api[type] = (options: MessageType | string) => {
    if (typeof options === 'string') {
      options = { content: options }
    }
    return getInstance()!.add({ ...options, type })
  }
})

export interface Api {
  info(options: MessageType | string) : void
  error(options: MessageType | string) : void
  warn(options: MessageType | string) : void
  success(options: MessageType | string) : void
}

export default api as Api


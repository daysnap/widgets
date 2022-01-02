
import React from 'react'
import ReactDOM from 'react-dom'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'
import Portal from '../Portal'
import Align, { AlignType } from '../Align'

type ActionType = 'click' | 'hover' | 'focus' | 'blur'

export interface TriggerProps {
  className?: string
  children: React.ReactElement []
  action?: ActionType | ActionType []
  showAction?: ActionType[]
  hideAction?: ActionType[]
  align?: AlignType
}

const Trigger: React.FC<TriggerProps> = ({
  className,
  children,
  align = { points: ['tl', 'bl'], offset: [0, 0] },
  ...restProps
}) => {

  if (React.Children.count(children) <= 0) {
    return null
  }

  let [trigger, ...alignChildren] = React.Children.toArray(children)
  const refTrigger = React.useRef()
  const [visible, setVisible] = React.useState<boolean>(false)

  const cls = createPrefixCls('trigger')
  const classes = classnames(
    `${cls}`,
    className,
  )

  const getContainer = () => {
    const container = window.document.createElement('div')
    Object.assign(container.style, {
      position: 'absolute',
      top: '0',
      let: '0',
      width: `100%`,
    })
    return container
  }

  const handleClick = () => {
    setVisible(v => !v)
    console.log('11')
  }
  const cloneProps = {
    ref: refTrigger,
    onClick: handleClick
  }
  trigger = React.cloneElement(trigger as React.ReactElement, cloneProps)

  let portal: React.ReactElement | null = null
  if (visible) {
    portal = (
      <Portal
        key="portal"
        getContainer={getContainer}
      >
        <Align
          align={align}
          target={() => refTrigger.current!}
        >
          {alignChildren[0] as React.ReactElement}
        </Align>
      </Portal>
    )
  }

  return (
    <>
      {trigger}
      {portal}
    </>
  )
}

export default Trigger


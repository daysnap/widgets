
import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'
import Portal from '../Portal'
import Align, { AlignType } from '../Align'
import RcAlign from "rc-align";

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

  let [trigger, alignChildren] = React.Children.toArray(children)
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
    window.document.body.appendChild(container)
    return container
  }

  const handleClick = () => {
    setVisible(v => !v)
  }
  const cloneProps = {
    ref: refTrigger,
    onClick: handleClick
  }
  if (React.isValidElement(trigger)) {
    trigger = React.cloneElement(trigger, cloneProps)
  }

  let portal: React.ReactElement | null = null
  if (visible && React.isValidElement(alignChildren)) {
    portal = (
      <Portal
        key="portal"
        getContainer={getContainer}
      >
        <RcAlign
          align={align}
          target={() => refTrigger.current!}
        >
          {alignChildren}
        </RcAlign>
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


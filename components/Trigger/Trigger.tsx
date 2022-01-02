
import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'
import Portal from '../Portal'
import Align, { AlignType, OnAlign } from '../Align'
import RcAlign from "rc-align";

type ActionType = 'click' | 'hover' | 'focus' | 'blur'

export interface TriggerProps {
  className?: string
  children: React.ReactElement []
  action?: ActionType | ActionType []
  showAction?: ActionType[]
  hideAction?: ActionType[]
  align?: AlignType
  onAlign?: OnAlign
  autoDestroy?: boolean
}

const Trigger: React.FC<TriggerProps> = ({
  className,
  children,
  align = { points: ['tl', 'bl'], offset: [0, 0] },
  autoDestroy= true,
  ...restProps
}) => {

  let [trigger, ...restChildren] = React.Children.toArray(children)
  const refTrigger = React.useRef()
  const [visible, setVisible] = React.useState<boolean>(false)
  const [option, setOption] = React.useState<boolean>(false)

  const cls = createPrefixCls('trigger')
  const classes = classnames(
    `${cls}`,
    className,
    ``
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

  const handleAlign: OnAlign = (source, result) => {
    console.log('挂载成功')
    setOption(v => !v)
  }
  const refAlign = React.useRef<any>()
  const style: React.CSSProperties = {
    opacity: visible ? undefined : 0
  }
  let portal: React.ReactElement | null = null
  if (visible || refAlign.current) {
    portal = (
      <Portal
        key="portal"
        getContainer={getContainer}
      >
        <RcAlign
          monitorBufferTime={1000}
          ref={refAlign}
          align={align}
          target={() => refTrigger.current!}
          onAlign={handleAlign}
        >
          <div
            className={classes}
            style={style}
          >
            {restChildren}
          </div>
        </RcAlign>
      </Portal>
    )

    if (!visible && autoDestroy) {
      portal = null
    }
  }

  return (
    <>
      {trigger}
      {portal}
    </>
  )
}

export default Trigger


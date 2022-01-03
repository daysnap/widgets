
import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'
import Portal from '../Portal'
import Align, { AlignType, OnAlign } from '../Align'

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
  prefixCls?: string
}

const Trigger: React.FC<TriggerProps> = ({
  className,
  children,
  align = { points: ['tl', 'bl'], offset: [0, 0] },
  autoDestroy= true,
  onAlign,
  prefixCls,
  ...restProps
}) => {

  let [trigger, ...restChildren] = React.Children.toArray(children)
  const refTrigger = React.useRef()
  const [visible, setVisible] = React.useState<boolean>(false)

  const cls = createPrefixCls(prefixCls || 'trigger')
  const classes = classnames(
    `${cls}`,
    {
      [`${cls}-hidden`]: !visible,
    },
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

  const refAlign = React.useRef<any>()
  let portal: React.ReactElement | null = null
  if (visible || refAlign.current) {
    portal = (
      <Portal
        key="portal"
        getContainer={getContainer}
      >
        <Align
          ref={refAlign}
          align={align}
          target={() => refTrigger.current!}
          onAlign={onAlign}
          monitorWindowResize
        >
          <div
            className={classes}
          >
            {restChildren}
          </div>
        </Align>
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



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
  showAction?: ActionType | ActionType[]
  hideAction?: ActionType | ActionType[]
  align?: AlignType
  onAlign?: OnAlign
  autoDestroy?: boolean
  prefixCls?: string
}

const Trigger: React.FC<TriggerProps> = ({
  className,
  children,
  action,
  showAction= [],
  hideAction= [],
  align = { points: ['tl', 'bl'], offset: [0, 0] },
  // align,
  onAlign,
  autoDestroy= false,
  prefixCls,
  ...restProps
}) => {

  const [child, ...restChildren] = React.Children.toArray(children)
  const refTrigger = React.useRef<HTMLElement>()
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

  const isClickToShow = action?.includes('click') || showAction?.includes('click')
  const isClickToHide = action?.includes('click') || hideAction?.includes('click')
  const isMouseEnterToShow = action?.includes('hover') || showAction?.includes('hover')
  const isMouseLeaveToHide = action?.includes('hover') || hideAction?.includes('hover')
  const isFocusToShow = action?.includes('focus') || showAction?.includes('focus')
  const isBlurToHide = action?.includes('blur') || hideAction?.includes('blur')

  const trim: (type: string, e: any) => void = (type, e) => {
    const childCallback = (child as React.ReactElement).props[type]
    childCallback?.(e)
    (restProps as any)[type]?.(e)
  }
  const handleClick: React.MouseEventHandler<HTMLElement> = (e) => {
    trim('onClick', e)
    if (isClickToShow && !visible) {
      setVisible(true)
    } else if (isClickToHide && visible) {
      setVisible(false)
    }
  }
  const handleMouseEnter: React.MouseEventHandler<HTMLElement> = (e) => {
    trim('onMouseEnter', e)
    if (isMouseEnterToShow) {
      setVisible(true)
    }
  }
  const handleMouseLeave: React.MouseEventHandler<HTMLElement> = (e) => {
    trim('onMouseLeave', e)
    if (isMouseLeaveToHide) {
      setVisible(false)
    }
  }
  const handleFocus: React.FocusEventHandler = (e) => {
    trim('onFocus', e)
    if (isFocusToShow) {
      setVisible(true)
    }
  }
  const handleBlur: React.FocusEventHandler = (e) => {
    trim('onBlur', e)
    if (isBlurToHide) {
      setVisible(false)
    }
  }

  const cloneProps: React.HTMLAttributes<HTMLElement> = {
    onClick: handleClick,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onFocus: handleFocus,
    onBlur: handleBlur,
  }

  let trigger: React.ReactElement
  if (React.isValidElement(child)) {
    trigger = React.cloneElement(child, {
      ref: refTrigger,
      ...cloneProps,
      onClick: handleClick
    })
  }

  const refAlign = React.useRef<any>()
  const refPopup = React.useRef<HTMLDivElement>(null)
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
            ref={refPopup}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
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

  React.useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      const { target } = e
      if (
        !refTrigger.current?.contains(target as Node)
        && !refPopup.current?.contains(target as Node)
      ) {
        setVisible(false)
      }
    }
    document.addEventListener('mousedown', handleMouseDown)
    return () => {
      document.removeEventListener('mousedown', handleMouseDown)
    }
  }, [])

  return (
    <>
      {trigger!}
      {portal}
    </>
  )
}

export default Trigger


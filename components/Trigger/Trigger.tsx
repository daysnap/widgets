
import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'
import Portal from '../Portal'
import Align, { OnAlign, AlignRef } from '../Align'
import { supportRef, composeRef } from '../utils/ref'
import { TriggerProps, TriggerRef } from './interface'

const Trigger = React.forwardRef<TriggerRef, TriggerProps>(({
  className,
  children,
  action,
  showAction= [],
  hideAction= [],
  align,
  onAlign,
  autoDestroy= false,
  prefixCls,
  placements,
  placement,
  ...restProps
}, ref) => {

  const [child, ...restChildren] = React.Children.toArray(children)
  const refTrigger = React.useRef<HTMLElement>(null)
  const [visible, setVisible] = React.useState<boolean>(false)
  const [alignedClassName, setAlignedClassName] = React.useState<string>()

  const cls = prefixCls || createPrefixCls('trigger')
  const classes = classnames(
    `${cls}`,
    alignedClassName,
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
    if (React.isValidElement(child)) {
      const childCallback = (child as React.ReactElement).props[type]
      childCallback?.(e)
    }
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
      delaySetVisible(true)
    }
  }
  const handleMouseLeave: React.MouseEventHandler<HTMLElement> = (e) => {
    trim('onMouseLeave', e)
    if (isMouseLeaveToHide) {
      delaySetVisible(false)
    }
  }
  const handleFocus: React.FocusEventHandler = (e) => {
    trim('onFocus', e)
    if (isFocusToShow) {
      delaySetVisible(true)
    }
  }
  const handleBlur: React.FocusEventHandler = (e) => {
    trim('onBlur', e)
    if (isBlurToHide) {
      delaySetVisible(false)
    }
  }
  const refDelayTimer = React.useRef<number>()
  const delaySetVisible = (visible: boolean) => {
    if (refDelayTimer.current) {
      clearTimeout(refDelayTimer.current)
    }
    refDelayTimer.current = window.setTimeout(() => {
      setVisible(visible)
      clearTimeout(refDelayTimer.current)
    }, 0.15 * 1000)
  }

  const cloneProps: React.HTMLAttributes<HTMLElement> = {
    onClick: handleClick,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onFocus: handleFocus,
    onBlur: handleBlur,
    className: `${cls}-${visible ? 'on' : 'off'}`
  }
  let element: React.ReactElement
  if (React.isValidElement(child) && supportRef(child)) {
    (cloneProps as any).ref = composeRef(refTrigger, (child as any).ref)
    element = child
  } else {
    element = <span ref={refTrigger}>{child}</span>
  }
  const trigger = React.cloneElement(element, cloneProps)

  const handleAlign: OnAlign = (source, result) => {
    if (placements) {
      const key = Object.keys(placements).find(k => {
        const { points } = placements[k]
        return JSON.stringify(points) === JSON.stringify(result.points)
      })
      if (key) {
        setAlignedClassName(`${prefixCls}-placement-${key}`)
      }
    }
    onAlign?.(source, result)
  }

  const refAlign = React.useRef<AlignRef>(null)
  const refPopup = React.useRef<HTMLDivElement>(null)
  const forceAlign = () => refAlign.current?.forceAlign()

  let portal: React.ReactElement | null = null
  if (React.Children.count(restChildren) > 0 && (visible || refAlign.current)) {
    portal = (
      <Portal
        key="portal"
        getContainer={getContainer}
      >
        <Align
          ref={refAlign}
          align={align}
          target={() => refTrigger.current!}
          onAlign={handleAlign}
          monitorWindowResize
        >
          <div
            ref={refPopup}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={classes}
            style={{ position: 'absolute' }}
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

  React.useImperativeHandle(ref, () => ({
    forceAlign
  }))

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
      {trigger}
      {portal}
    </>
  )
})

export default Trigger


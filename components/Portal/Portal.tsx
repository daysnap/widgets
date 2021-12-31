
import React, { forwardRef } from 'react'
import { createPortal } from 'react-dom'

export type PortalRef = {}

export interface PortalProps {
  children?: React.ReactNode
  getContainer: () => HTMLElement
  didUpdate?: (prevProps: PortalProps) => void
}

const Portal: React.FC<PortalProps> = forwardRef<PortalRef, PortalProps>((props, ref) => {

  const { children, getContainer, didUpdate } = props
  const refContainer = React.useRef<HTMLElement | null>(null)

  React.useImperativeHandle(ref, () => ({}))

  // 挂载的容器
  if (!refContainer.current) {
    refContainer.current = getContainer()
  }

  React.useEffect(() => {
    didUpdate?.(props)
  })

  React.useEffect(() => {
    return () => {
      // 销毁
      refContainer.current?.parentNode?.removeChild(refContainer.current)
    }
  }, [])

  // 挂载
  return refContainer.current ? createPortal(children, refContainer.current) : null
})

export default Portal



import React, {forwardRef} from 'react'
import { createPortal } from 'react-dom'

export type PortalRef = {}

export interface PortalProps {
  children?: React.ReactNode
  getContainer: () => HTMLElement
  didUpdate?: (prevProps: PortalProps) => void
}

const Portal: React.FC<PortalProps> = forwardRef<PortalRef, PortalProps>(({
  children,
  getContainer,
  didUpdate
}, ref) => {

  const refContainer = React.useRef<HTMLDivElement | null>(null)

  // React.useImperativeHandle(ref, )

  if (!refContainer.current) {
    refContainer.current = document.createElement('div')
    document.body.appendChild(refContainer.current)
  }

  React.useLayoutEffect(() => {
    return () => {
      const node = refContainer.current
      if (node) {
        document.body.removeChild(node)
      }
    }
  }, [refContainer])

  return createPortal(children, refContainer.current)
})

export default Portal


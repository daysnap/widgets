
import React from 'react'
import { createPortal } from 'react-dom'

export interface PortalProps {
  children?: React.ReactNode
}

const Portal: React.FC<PortalProps> = ({
  children,
}) => {

  const refContainer = React.useRef<HTMLDivElement | null>(null)

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
}

export default Portal


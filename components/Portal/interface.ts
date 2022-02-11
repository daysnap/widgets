
import React from 'react'

export interface PortalProps {
  prefixCls?: string
  className?: string
  children?: React.ReactNode
  getContainer: () => HTMLElement
  didUpdate?: (prevProps: PortalProps) => void
}

export type RefPortal = {}


import React from 'react'
import { createPortal } from 'react-dom'
import { RefPortal, PortalProps } from './interface'

const Portal = React.forwardRef<RefPortal, PortalProps>((props, ref) => {

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
      if (refContainer.current !== document.body) {
        refContainer.current?.parentNode?.removeChild(refContainer.current)
      }
    }
  }, [])

  // 挂载
  return refContainer.current ? createPortal(children, refContainer.current) : null
})

Portal.displayName = 'Portal'

export default Portal


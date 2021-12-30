
import React from 'react'
import classnames from 'classnames'
import Portal from '../Portal'
import domAlign from 'dom-align'
import { createPrefixCls } from '../utils/create'

export interface TriggerProps {
  className?: string,
  children?: React.ReactNode,
  targetNode: any,
  childRef?: any,
  points?: any[],
  offset?: any[],
  visible: boolean
}

const Trigger: React.FC<TriggerProps> = ({
  className,
  children,
  visible= false,
  targetNode,
  childRef,
  points = ['tl', 'bl'],
  offset = ['0', '0'],
  ...restProps
}) => {

  const cls = createPrefixCls('trigger')
  const classes = classnames(
    `${cls}`,
    className,
  )

  const sourceNode: any = React.useRef<HTMLDivElement | null>(null)
  const open = () => domAlign(sourceNode.current, targetNode.current, { points, offset })
  const close = () => domAlign(sourceNode.current, targetNode.current, { points, offset: ['-1000%', '0'] })

  React.useImperativeHandle(childRef, () => ({ open, close }))

  function clickCallback (e: Event) {
    if (
      sourceNode.current.contains(e.target)
      || targetNode.current.contains(e.target)
    ) {
      return
    }
    close()
  }

  React.useEffect(() => {
    if (visible) {
      open()
      document.addEventListener('click', clickCallback, false)
      return () => { document.removeEventListener('click', clickCallback, false) }
    }
  }, [visible])

  if (!visible) return null

  return (
    <Portal>
      <div ref={sourceNode} style={{ position: 'absolute', width: 100, height: 200, border: '1px solid red' }}>{children}</div>
    </Portal>
  )
}

export default Trigger


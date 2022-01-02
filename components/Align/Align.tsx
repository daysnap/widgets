
import React from 'react'
import { alignElement, alignPoint } from 'dom-align'
import type { AlignType, AlignResult, TargetType, TargetPoint } from './interface'
import { composeRef } from '../utils/ref'

export type OnAlign = (source: HTMLElement, result: AlignResult) => void

export interface AlignProps {
  className?: string
  align: AlignType
  target: TargetType
  children: React.ReactElement
  onAlign?: OnAlign
  monitorWindowResize?: boolean
}

const getElement = (func: TargetType) => typeof func !== 'function' ? null : func()

const getPoint = (point: TargetType) => typeof point !== 'object' || !point ? null : point

export interface RefAlign {
  forceAlign: () => void
}

const Align = React.forwardRef<RefAlign, AlignProps>(({
  className,
  align,
  target,
  children,
  onAlign,
  monitorWindowResize= false,
  ...restProps
}, ref) => {

  const refSource = React.useRef<any>()
  // 只允许一个元素
  children = React.Children.only(children)

  const forceAlign = React.useCallback(() => {
    console.log('挂载中')
    const element = getElement(target)
    const point = getPoint(target)
    const source = refSource.current
    let result: AlignResult

    if (element) {
      result = alignElement(source, element, align)
    } else if (point) {
      result = alignPoint(source, point, align)
    }

    if (result!) {
      onAlign?.(source, result)
    }
  }, [target])

  React.useImperativeHandle(ref, () => ({ forceAlign }))
  React.useLayoutEffect(() => {
    forceAlign()
  }, [])

  // 监听 window 变化
  React.useEffect(() => {
    if (monitorWindowResize) {
      window.addEventListener('resize', forceAlign)
    }
    return () => {
      if (monitorWindowResize) window.removeEventListener('resize', forceAlign)
    }
  }, [monitorWindowResize, forceAlign])

  if (React.isValidElement(children)) {
    children = React.cloneElement(children, {
      ...restProps,
      ref: composeRef((children as any).ref, refSource)
    })
  }

  return children

})

export default Align


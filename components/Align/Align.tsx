
import React from 'react'
import { alignElement, alignPoint } from 'dom-align'
import { AlignResult, TargetType, AlignRef, AlignProps } from './interface'
import { composeRef } from '../utils/ref'

const getElement = (func: TargetType) => typeof func !== 'function' ? null : func()

const getPoint = (point: TargetType) => typeof point !== 'object' || !point ? null : point

const Align = React.forwardRef<AlignRef, AlignProps>((props, ref) => {
  let {
    align,
    target,
    children,
    onAlign,
    monitorWindowResize= false,
    ...restProps
  } = props

  const refSource = React.useRef<any>()
  // 只允许一个元素
  children = React.Children.only(children)

  const forceAlign = React.useCallback(() => {
    const element = getElement(target)
    const point = getPoint(target)
    const source = refSource.current
    let result: AlignResult | null = null

    if (element) {
      result = alignElement(source, element, align)
    } else if (point) {
      result = alignPoint(source, point, align)
    }

    if (result) {
      onAlign?.(source, result)
    }
  }, [target])

  React.useImperativeHandle(ref, () => ({ forceAlign }))

  // 为了解决第一次挂载的时候闪动的问题
  React.useLayoutEffect(() => {
    forceAlign()
  }, [])

  React.useEffect(() => {
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

Align.displayName = 'Align'

export default Align



import React from 'react'
import { alignElement, alignPoint } from 'dom-align'
import type { AlignType, AlignResult, TargetType, TargetPoint } from './interface'

type OnAlign = (source: HTMLElement, result: AlignResult) => void

export interface AlignProps {
  className?: string
  align: AlignType
  target: TargetType
  children: React.ReactElement
  onAlign?: OnAlign
}

const getElement = (func: TargetType) => typeof func !== 'function' ? null : func()

const getPoint = (point: TargetType) => typeof point !== 'object' || !point ? null : point

const Align: React.FC<AlignProps> = ({
  className,
  align,
  target,
  children,
  onAlign,
  ...restProps
}) => {

  const refSource = React.useRef<any>()
  // 只允许一个元素
  children = React.Children.only(children)

  React.useEffect(() => {
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

  }, [])

  if (React.isValidElement(children)) {
    children = React.cloneElement(children, {
      ...restProps,
      ref: refSource
    })
  }

  return children

}

export default Align


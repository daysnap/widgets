
import React from 'react'
import classnames from 'classnames'
import { alignElement, alignPoint } from 'dom-align'
import { createPrefixCls } from '../utils/create'
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

  // 只允许一个元素
  children = React.Children.only(children)
  const refSource = React.useRef<any>()

  const cls = createPrefixCls('align')
  const classes = classnames(
    `${cls}`,
    className,
  )

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
    children = React.cloneElement(children, { ref: refSource })
  }

  return children

}

export default Align


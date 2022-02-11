
import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'
import { CanvasXorProps } from './interface'
import useCanvasXOR from './useCanvasXOR'

const CanvasXOR: React.FC<CanvasXorProps> = (props) => {
  const {
    className,
    bgSrc,
    maskSrc,
    ...restProps
  } = props

  const cls = createPrefixCls('canvas-x-o-r')
  const classes = classnames(
    `${cls}`,
    className,
  )

  const refCanvas = React.useRef<HTMLCanvasElement>(null)
  useCanvasXOR({ refCanvas, bgSrc, maskSrc })

  return (
    <canvas
      {...restProps}
      className={classes}
      ref={refCanvas}
    />
  )
}

export default CanvasXOR


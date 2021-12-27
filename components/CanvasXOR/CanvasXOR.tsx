
import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'
import useCanvasXOR from './useCanvasXOR'

export interface CanvasXORProps {
  bgSrc: string,
  maskSrc: string,
  className?: string
}

const CanvasXOR: React.FC<CanvasXORProps> = ({
  className,
  bgSrc,
  maskSrc,
  ...restProps
}) => {

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


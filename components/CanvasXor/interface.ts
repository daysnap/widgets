import React from 'react'

export interface CanvasXorProps extends React.CanvasHTMLAttributes<HTMLCanvasElement>{
  prefixCls?: string
  bgSrc: string
  maskSrc: string
}


import React from 'react'
import { CanvasXor } from '@daysnap/widgets'

export default () => {
  return (
    <CanvasXor
      bgSrc={'/images/logo-bg.png'}
      maskSrc={'/images/logo-mask.png'}
      style={{ width: '300px', height: 'auto' }}
    />
  )
}

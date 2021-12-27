
import React from 'react'
import { getImageInfo } from '../utils/image'

export interface CanvasXOROptions {
  refCanvas: React.MutableRefObject<HTMLCanvasElement | null>
  bgSrc: string
  maskSrc: string
}

export default function useCanvasXOR (options : CanvasXOROptions) {
  const { refCanvas, bgSrc, maskSrc } = options
  const refTimer = React.useRef<number>()
  React.useEffect(() => {
    ;(async () => {
      const bg = await getImageInfo({ src: bgSrc })
      const mask = await getImageInfo({ src: maskSrc })
      const { width: bgW } = bg
      const { width: maskW, height: maskH } = mask
      const canvas = refCanvas.current
      if (canvas) {
        const ctx = canvas.getContext('2d')!!
        let n = 0, draw: () => void, loop: () => void
        ;(draw = () => {
          canvas.width = maskW
          canvas.height = maskH
          ctx.drawImage(bg, -n, 0, bgW, maskH)
          ctx.drawImage(bg, bgW - n, 0, bgW, maskH)
          ctx.globalCompositeOperation = 'xor'
          ctx.drawImage(mask, 0, 0, maskW, maskH)
        })()
        ;(loop = () => {
          refTimer.current = window.requestAnimationFrame(() => {
            if (window.document.scrollingElement?.scrollTop!! < window.outerHeight) {
              n = (n + .6) % bgW
              draw()
            }
            loop()
          })
        })()
      }
    })()
    return () => window.cancelAnimationFrame(refTimer.current!)
  })
}

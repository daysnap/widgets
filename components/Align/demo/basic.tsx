
import React from 'react'
import { Align, Portal } from '@daysnap/widgets'

export default () => {

  const refTarget = React.useRef<HTMLDivElement>(null)
  const align = {
    points: ['tl', 'bl'],
    offset: [0, 0],
  }

  return (
    <div>
      <div ref={refTarget}>目标元素</div>
      <Portal getContainer={() => document.body}>
        <Align align={align} target={() => refTarget.current!}>
          <div style={{ position: 'absolute' }}>对齐的元素</div>
        </Align>
      </Portal>
    </div>
  )
}

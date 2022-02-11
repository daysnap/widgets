
import React from 'react'
import { Trigger } from '@daysnap/widgets'

export default () => {
  return (
    <div style={{ paddingLeft: `32px` }}>
      <Trigger
        autoDestroy
        action="click"
        align={{ points: ['tl', 'bl'], offset: [0, 0], overflow: { adjustX: 1, adjustY: 1 } }}
      >
        <input/>
        <p  className="ddd">弹出的内容</p>
      </Trigger>
    </div>
  )
}

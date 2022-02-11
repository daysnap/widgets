
import React from 'react'
import { Portal } from '@daysnap/widgets'

export default () => {
  return (
    <Portal getContainer={() => document.getElementsByClassName('__dumi-default-previewer-demo')[0] as HTMLElement}>
      <span>挂载的元素</span>
    </Portal>
  )
}

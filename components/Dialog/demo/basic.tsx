
import React from 'react'
import { Dialog, Button } from '@daysnap/widgets'

export default () => {
  const handleAlert = () => {
    Dialog.alert(`alert`).then(() => {
      console.log('成功')
    }).catch(err => {
      console.log('失败', err)
    })
  }
  const handleConfirm = () => {
    Dialog.confirm(`confirm`).then(() => {
      console.log('成功')
    }).catch(err => {
      console.log('失败', err)
    })
  }

  return (
    <dl>
      <dt>基本用法</dt>
      <dd>
        <Button onClick={handleConfirm}>Confirm</Button>
        <Button onClick={handleAlert}>Alert</Button>
      </dd>
    </dl>
  )
}

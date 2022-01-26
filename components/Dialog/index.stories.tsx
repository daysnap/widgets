
import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Dialog, { DialogProps } from './index'
import Button from '../Button'

export default {
  title: 'Dialog',
  component: Dialog,
  argTypes: {},
} as Meta

const Template: Story<DialogProps> = args => {
  const handleAlert = () => {
    Dialog.alert(1111).then(res => {
      console.log('成功')
    }).catch(err => {
      console.log('失败', err)
    })
  }
  const handleConfirm = () => {
    Dialog.confirm(`222`).then(res => {
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

export const Basic = Template.bind({})
Basic.storyName = '基础用法'
Basic.args = {}

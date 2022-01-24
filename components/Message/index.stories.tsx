
import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import message from './index'
import Button from '../Button'

export default {
  title: 'Message',
  argTypes: {},
} as Meta

const Template: Story = args => {
  const handleToast = (type: 'error' | 'success' | 'warn' | 'info') => () => {
    message[type]('哈哈哈')
  }
  return (
    <dl>
      <dt>基本用法</dt>
      <dd>
        <Button onClick={handleToast('info')}>提示</Button>
        <Button onClick={handleToast('error')}>错误</Button>
        <Button onClick={handleToast('warn')}>警告</Button>
        <Button onClick={handleToast('success')}>成功</Button>
      </dd>
    </dl>
  )
}

export const Basic = Template.bind({})
Basic.storyName = '基础用法'
Basic.args = {
  type: 'info'
}



import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import message from './index'
import Button from '../Button'

export default {
  title: 'Message',
  argTypes: {},
} as Meta

const Template: Story = args => {
  const handleToast = () => {
    message.info('哈哈哈')
  }
  return (
    <Button onClick={handleToast}>点我提示</Button>
  )
}

export const Basic = Template.bind({})
Basic.storyName = '基础用法'
Basic.args = {
  type: 'info'
}



import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Message, { MessageProps } from './index'

export default {
  title: 'Message',
  component: Message,
  argTypes: {},
} as Meta

const Template: Story<MessageProps> = args => <Message {...args} />

export const Basic = Template.bind({})
Basic.storyName = '基础用法'
Basic.args = {}


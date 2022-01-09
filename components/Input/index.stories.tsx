
import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Input, { InputProps } from './index'

export default {
  title: 'Input',
  component: Input,
  argTypes: {},
} as Meta

const Template: Story<InputProps> = args => <Input {...args} />

export const Basic = Template.bind({})
Basic.storyName = '基础用法'
Basic.args = {}



import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Form, { FormProps } from './index'

export default {
  title: 'Form',
  component: Form,
  argTypes: {},
} as Meta

const Template: Story<FormProps> = args => <Form {...args} />

export const Basic = Template.bind({})
Basic.storyName = '基础用法'
Basic.args = {}


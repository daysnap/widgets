
import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Checkbox, { CheckboxProps } from './index'

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {},
} as Meta

const Template: Story<CheckboxProps> = args => <Checkbox {...args} />

export const Basic = Template.bind({})
Basic.storyName = '基础用法'
Basic.args = {}


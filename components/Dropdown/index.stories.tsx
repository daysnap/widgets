
import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Dropdown, { DropdownProps } from './index'

export default {
  title: 'Dropdown',
  component: Dropdown,
  argTypes: {},
} as Meta

const Template: Story<DropdownProps> = args => <Dropdown {...args} />

export const Basic = Template.bind({})
Basic.storyName = '基础用法'
Basic.args = {}


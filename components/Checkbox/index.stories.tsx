
import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Checkbox, { CheckboxProps } from './index'

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {},
} as Meta

const Template: Story<CheckboxProps> = args => {
  return (
    <dl>
      <dt>基本信息</dt>
      <dd>
        <Checkbox {...args}>复选框</Checkbox>
      </dd>
    </dl>
  )
}

export const Basic = Template.bind({})
Basic.storyName = '基础用法'
Basic.args = {}


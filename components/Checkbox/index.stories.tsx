
import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Checkbox, { CheckboxProps } from './index'

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {},
} as Meta

const Template: Story<CheckboxProps> = args => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    console.log('e => ', e, e.target.value, e.target.checked)
  }
  return (
    <dl>
      <dt>基本信息</dt>
      <dd>
        <Checkbox onChange={handleChange} {...args}>复选框</Checkbox>
      </dd>
      <dd>
        <input onChange={handleChange} type="checkbox" value="111"/>
      </dd>
    </dl>
  )
}

export const Basic = Template.bind({})
Basic.storyName = '基础用法'
Basic.args = {
  disabled: false,
}


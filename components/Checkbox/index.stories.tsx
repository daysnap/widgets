
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
  const handleGroupChange = (e: any) => {
    console.log('checked => ', e)
  }
  return (
    <dl>
      <dt>基本信息</dt>
      <dd>
        <Checkbox onChange={handleChange} {...args}>复选框</Checkbox>
      </dd>
      <dd>
        <Checkbox.Group
          disabled={args.disabled}
          onChange={handleGroupChange}>
          {
            ['A', 'B', 'C', 'D'].map(key => <Checkbox value={key} key={key}>{key}</Checkbox>)
          }
        </Checkbox.Group>
      </dd>
    </dl>
  )
}

export const Basic = Template.bind({})
Basic.storyName = '基础用法'
Basic.args = {
  disabled: false,
}


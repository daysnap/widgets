
import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Radio, { RadioProps } from './index'

export default {
  title: 'Radio',
  component: Radio,
  argTypes: {},
} as Meta

const Template: Story<RadioProps> = args => {
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
        <Radio onChange={handleChange} {...args}>单选框</Radio>
      </dd>
      <dd>
        <Radio.Group
          disabled={args.disabled}
          onChange={handleGroupChange}>
          {
            ['A', 'B', 'C', 'D'].map(key => <Radio value={key} key={key}>{key}</Radio>)
          }
        </Radio.Group>
      </dd>
    </dl>
  )
}

export const Basic = Template.bind({})
Basic.storyName = '基础用法'
Basic.args = {
  disabled: false,
}


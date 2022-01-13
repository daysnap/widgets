
import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Input, { InputProps } from './index'
import Icon from '../Icon'

const Text = () => {
  return <div>124</div>
}

export default {
  title: 'Input',
  component: Input,
  argTypes: {},
} as Meta

const Template: Story<InputProps> = args => {
  const [value, setValue] = React.useState<string>('')
  const handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = e => {
    setValue(e.target.value)
  }
  return (
    <dl>
      <dt>基础用法 值：{value}</dt>
      <dd>
        <Input
          {...args}
          value={value}
          onChange={handleChange}
        />
      </dd>
      <dd>
        <Input
          {...args}
          value={value}
          onChange={handleChange}
          prefix={<Icon icon="icon-loading"/>}
          suffix={<Icon icon="icon-sousuo"/>}
          clearable
        />
      </dd>
      <dd>
        <Input.Password
          {...args}
          value={value}
          showCount
          showPassword
          onChange={handleChange}
        />
      </dd>
      <dd>
        <Input.Textarea
          value={value}
          onChange={handleChange}
          autosize
          showCount
          placeholder={args.placeholder}
          maxLength={args.maxLength}
          disabled={args.disabled}
        />
      </dd>
    </dl>
  )
}

export const Basic = Template.bind({})
Basic.storyName = '基础用法'
Basic.args = {
  placeholder: '请输入',
  clearable: false,
  showCount: false,
  maxLength: 11,
  disabled: false,
}


import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Input, { InputProps } from './index'
import Icon from '../Icon'

export default {
  title: 'Input',
  component: Input,
  argTypes: {},
} as Meta

const Template: Story<InputProps> = args => {
  return (
    <dl>
      <dt>基础用法</dt>
      <dd>
        <Input
          {...args}
          prefix={<Icon icon="icon-loading"/>}
          suffix="搜索"
        />
      </dd>
    </dl>
  )
}

export const Basic = Template.bind({})
Basic.storyName = '基础用法'
Basic.args = {
  placeholder: '请输入'
}


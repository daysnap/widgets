
import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Button, { ButtonProps } from './index'

export default {
  title: 'Button',
  component: Button,
  argTypes: {},
} as Meta

const Template: Story<ButtonProps> = args => {
  const { disabled } = args
  console.log('disabled => ', disabled)
  return (
    <dl>
      <dt>动态展示</dt>
      <dd>
        <Button {...args}>按钮</Button>
      </dd>
      <dt>基础用法</dt>
      <dd>
        <Button disabled={disabled}>默认按钮</Button>
        <Button disabled={disabled} type="primary">主要按钮</Button>
        <Button disabled={disabled} type="success">成功按钮</Button>
        <Button disabled={disabled} type="warning">警告按钮</Button>
        <Button disabled={disabled} type="danger">危险按钮</Button>
      </dd>
    </dl>
  )
}

export const Basic = Template.bind({})
Basic.storyName = '基础用法'
Basic.args = {
  loading: false,
  icon: 'icon-follow',
  type: 'primary',
  disabled: true,
}


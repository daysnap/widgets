
import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Button, { ButtonProps } from './index'

export default {
  title: 'Button',
  component: Button,
  argTypes: {},
} as Meta

const Template: Story<ButtonProps> = args => {
  return (
    <dl>
      <dt>动态展示</dt>
      <dd>
        <Button {...args}>默认按钮</Button>
      </dd>
      <dt>默认按钮</dt>
      <dd>
        <Button {...args}>默认按钮</Button>
        <Button {...args}>默认按钮</Button>
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
}


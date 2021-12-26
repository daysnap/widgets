
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Story, Meta } from '@storybook/react/types-6-0'
import Button, { ButtonProps } from './index'

export default {
  title: 'Button',
  component: Button,
  argTypes: {},
} as Meta

const Template: Story<ButtonProps> = args => {
  const { disabled, icon } = args
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
      <dd>
        <Button disabled={disabled} plain>默认按钮</Button>
        <Button disabled={disabled} plain type="primary">主要按钮</Button>
        <Button disabled={disabled} plain type="success">成功按钮</Button>
        <Button disabled={disabled} plain type="warning">警告按钮</Button>
        <Button disabled={disabled} plain type="danger">危险按钮</Button>
      </dd>
      <dd>
        <Button disabled={disabled} type="text">文字按钮</Button>
        <Button loading disabled={disabled} type="text">文字按钮</Button>
      </dd>
      <dd>
        <Button disabled={disabled} icon={icon} type="text"/>
        <Button disabled={disabled} icon={icon}/>
        <Button disabled={disabled} icon={icon} type="primary"/>
        <Button disabled={disabled} loading/>
      </dd>

      <dt>链接按钮</dt>
      <dd>
        <Button target="_blank" href="https://www.baidu.com" {...args}>跳转百度</Button>
      </dd>
    </dl>
  )
}

export const Basic = Template.bind({})
Basic.storyName = '基础用法'
Basic.args = {
  loading: false,
  icon: 'icon-dianzan',
  type: 'primary',
  disabled: true,
}


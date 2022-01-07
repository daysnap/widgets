
import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Dropdown, { DropdownProps } from './index'
import Button from '../Button'

export default {
  title: 'Dropdown',
  component: Dropdown,
  argTypes: {},
} as Meta

const Template: Story<DropdownProps> = args => {
  return (
    <div>
      <p>123123123123123</p>
      <Dropdown trigger="click">
        <button>菜单</button>
        <Dropdown.Item disabled>帮助中心</Dropdown.Item>
        <Dropdown.Item>关于我们</Dropdown.Item>
        <Dropdown.Divider/>
        <Dropdown.Item>用户反馈</Dropdown.Item>
      </Dropdown>
      <p>123123123123123</p>
      <p>123123123123123</p>
      <p>123123123123123</p>
    </div>
  )
}

export const Basic = Template.bind({})
Basic.storyName = '基础用法'
Basic.args = {}


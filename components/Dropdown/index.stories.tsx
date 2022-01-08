
import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Dropdown, { DropdownProps } from './index'
import Placements from './placements'
import Button from '../Button'

export default {
  title: 'Dropdown',
  component: Dropdown,
  argTypes: {
    placement: {
      control: { type: 'select' },
      options: Object.keys(Placements),
    }
  },
} as Meta

const Template: Story<DropdownProps> = args => {
  return (
    <div>
      <Dropdown trigger="click" placement="topLeft">
        <button>菜单topLeft</button>
        <Dropdown.Item disabled>帮助中心</Dropdown.Item>
        <Dropdown.Item>关于我们</Dropdown.Item>
        <Dropdown.Divider/>
        <Dropdown.Item>用户反馈</Dropdown.Item>
      </Dropdown>
    </div>
  )
}

export const Basic = Template.bind({})
Basic.storyName = '基础用法'
Basic.args = {
  placement: 'topLeft'
}


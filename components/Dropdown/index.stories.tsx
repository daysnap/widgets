
import React, { Fragment } from 'react'
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
    },
    trigger: {
      control: { type: 'select' },
      options: [ 'click', 'hover' ],
    }
  },
} as Meta

const Template: Story<DropdownProps> = args => {
  return (
    <dl>
      <dt>基本使用</dt>
      <dd>
        <Dropdown {...args}>
          <Button>菜单topLeft</Button>
          <Dropdown.Item disabled>帮助中心</Dropdown.Item>
          <Dropdown.Item>关于我们</Dropdown.Item>
          <Dropdown.Divider/>
          <Dropdown.Item>用户反馈</Dropdown.Item>
        </Dropdown>
      </dd>
      <dt>弹出位置</dt>
      <dd>
        {
          Object.keys(Placements).map((placement: any, index) => (
            <Fragment key={placement}>
              <Dropdown trigger="click" placement={placement}>
                <Button>{placement}</Button>
                <Dropdown.Item>用户反馈</Dropdown.Item>
              </Dropdown>
              {index % 2 === 0 && index !== 0}
            </Fragment>
          ))
        }
      </dd>
    </dl>
  )
}

export const Basic = Template.bind({})
Basic.storyName = '基础用法'
Basic.args = {
  placement: 'topLeft',
  trigger: 'click',
}


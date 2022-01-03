
import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Trigger, { TriggerProps } from './index'

export default {
  title: 'Trigger',
  component: Trigger,
  argTypes: {},
} as Meta

const Template: Story<TriggerProps> = args => {

  return (
    <div style={{ paddingLeft: `32px` }}>
      <Trigger action="focus" hideAction="click">
        <input/>
        <p  className="ddd">弹出的内容</p>
      </Trigger>
    </div>
  )
}

export const Basic = Template.bind({})
Basic.storyName = '基础用法'
Basic.args = {}


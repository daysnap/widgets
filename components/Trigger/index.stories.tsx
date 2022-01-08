
import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Trigger, { TriggerProps } from './index'
import RcTrigger from 'rc-trigger'

export default {
  title: 'Trigger',
  component: Trigger,
  argTypes: {},
} as Meta

const Template: Story<TriggerProps> = args => {

  return (
    <div style={{ paddingLeft: `32px` }}>
      <br/>
      <br/>
      <br/>
      <Trigger
        autoDestroy
        action="click"
        align={{ points: ['tl', 'bl'], offset: [0, 0], overflow: { adjustX: 1, adjustY: 1 } }}
      >
        <input/>
        <p  className="ddd">弹出的内容</p>
      </Trigger>
      <br/>
      <br/>
      <br/>
      <RcTrigger
        prefixCls="ds-trigger"
        action="click"
        autoDestroy
        popupAlign={{ points: ['tl', 'bl'], offset: [0, 0], overflow: { adjustX: 1, adjustY: 1 } }}
        popup={() => (<p  className="ddd">弹出的内容</p>)}
      >
        <input/>
      </RcTrigger>
    </div>
  )
}

export const Basic = Template.bind({})
Basic.storyName = '基础用法'
Basic.args = {}


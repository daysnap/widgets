
import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Tooltip, { TooltipProps } from './index'
import Button from '../Button'

export default {
  title: 'Tooltip',
  component: Tooltip,
  argTypes: {},
} as Meta

const Template: Story<TooltipProps> = args => {
  const text = `prompt text`
  const buttonWidth = 70

  return (
    <dl className="tooltip">
      <dt>基础用法</dt>
      <dd>
        <div className="tooltip-demo">
          <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
            <Tooltip placement="topLeft" title={text}>
              <Button>TL</Button>
            </Tooltip>
            <Tooltip placement="top" title={text}>
              <Button>Top</Button>
            </Tooltip>
            <Tooltip placement="topRight" title={text}>
              <Button>TR</Button>
            </Tooltip>
          </div>
          <div style={{ width: buttonWidth, float: 'left' }}>
            <Tooltip placement="leftTop" title={text}>
              <Button>LT</Button>
            </Tooltip>
            <Tooltip placement="left" title={text}>
              <Button>Left</Button>
            </Tooltip>
            <Tooltip placement="leftBottom" title={text}>
              <Button>LB</Button>
            </Tooltip>
          </div>
          <div style={{ width: buttonWidth, marginLeft: buttonWidth * 4 + 24 }}>
            <Tooltip placement="rightTop" title={text}>
              <Button>RT</Button>
            </Tooltip>
            <Tooltip placement="right" title={text}>
              <Button>Right</Button>
            </Tooltip>
            <Tooltip placement="rightBottom" title={text}>
              <Button>RB</Button>
            </Tooltip>
          </div>
          <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
            <Tooltip placement="bottomLeft" title={text}>
              <Button>BL</Button>
            </Tooltip>
            <Tooltip placement="bottom" title={text}>
              <Button>Bottom</Button>
            </Tooltip>
            <Tooltip placement="bottomRight" title={text}>
              <Button>BR</Button>
            </Tooltip>
          </div>
        </div>
      </dd>
    </dl>
  )
}

export const Basic = Template.bind({})
Basic.storyName = '基础用法'
Basic.args = {
  title: '点击按钮',
  placement: 'top'
}

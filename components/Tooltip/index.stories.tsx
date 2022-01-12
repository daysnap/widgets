
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
  return (
    <dl>
      <dt>基础用法</dt>
      <dd>
        <Tooltip {...args}>
          <Button>按钮</Button>
        </Tooltip>
      </dd>
    </dl>
  )
}

export const Basic = Template.bind({})
Basic.storyName = '基础用法'
Basic.args = {
  title: '点击按钮'
}


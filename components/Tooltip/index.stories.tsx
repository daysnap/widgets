
import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Tooltip, { TooltipProps } from './index'

export default {
  title: 'Tooltip',
  component: Tooltip,
  argTypes: {},
} as Meta

const Template: Story<TooltipProps> = args => <Tooltip {...args} />

export const Basic = Template.bind({})
Basic.storyName = '基础用法'
Basic.args = {}


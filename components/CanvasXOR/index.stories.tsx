
import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import CanvasXOR, { CanvasXORProps } from './index'

export default {
  title: 'CanvasXOR',
  component: CanvasXOR,
  argTypes: {},
} as Meta

const Template: Story<CanvasXORProps> = args => <CanvasXOR {...args} />

export const Basic = Template.bind({})
Basic.storyName = '基础用法'
Basic.args = {}


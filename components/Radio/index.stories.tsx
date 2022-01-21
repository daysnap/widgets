
import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Radio, { RadioProps } from './index'

export default {
  title: 'Radio',
  component: Radio,
  argTypes: {},
} as Meta

const Template: Story<RadioProps> = args => <Radio {...args} />

export const Basic = Template.bind({})
Basic.storyName = '基础用法'
Basic.args = {}


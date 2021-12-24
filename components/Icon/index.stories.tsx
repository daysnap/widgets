
import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Icon, { IconProps } from './index'

export default {
  title: 'Icon',
  component: Icon,
  argTypes: {},
} as Meta

const Template: Story<IconProps> = args => <Icon {...args} />

export const Basic = Template.bind({})
Basic.storyName = '基础用法'
Basic.args = {
  icon: 'icon-loading'
}


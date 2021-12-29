
import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Portal, { PortalProps } from './index'

export default {
  title: 'Portal',
  component: Portal,
  argTypes: {},
} as Meta

const Template: Story<PortalProps> = args => <Portal {...args} />

export const Basic = Template.bind({})
Basic.storyName = '基础用法'
Basic.args = {}


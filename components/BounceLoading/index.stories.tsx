
import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import BounceLoading, { BounceLoadingProps } from './index'

export default {
  title: 'BounceLoading',
  component: BounceLoading,
  argTypes: {},
} as Meta

const Template: Story<BounceLoadingProps> = args => <BounceLoading {...args} />

export const Basic = Template.bind({})
Basic.storyName = '基础用法'
Basic.args = {
  count: 4
}


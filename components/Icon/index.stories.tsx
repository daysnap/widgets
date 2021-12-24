
import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { IconProps, Icon } from './index'

export default {
  title: 'Icon',
  component: Icon,
  argTypes: {},
} as Meta

const Template: Story<IconProps> = args => {
  return (
    <div>
      <Icon {...args} />
      <br/>
      <Icon.Loading {...args} />
    </div>
  )
}

export const Basic = Template.bind({})
Basic.storyName = '基础用法'
Basic.args = {
  icon: 'icon-loading2'
}


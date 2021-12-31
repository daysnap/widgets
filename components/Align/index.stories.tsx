
import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Align, { AlignProps } from './index'
import RcAlign from 'rc-align'

export default {
  title: 'Align',
  component: Align,
  argTypes: {},
} as Meta

const Template: Story<AlignProps> = args => {

  const refTarget = React.useRef<HTMLDivElement>(null)

  return (
    <div ref={refTarget}>
      1111
      <RcAlign align={{}} target={() => refTarget.current!}>
        <div>123</div>
      </RcAlign>
    </div>
  )
}

export const Basic = Template.bind({})
Basic.storyName = '基础用法'
Basic.args = {}


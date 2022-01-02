
import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Align, { AlignProps } from './index'
import Portal from '../Portal'

export default {
  title: 'Align',
  component: Align,
  argTypes: {},
} as Meta

const Template: Story<AlignProps> = args => {

  const refTarget = React.useRef<HTMLDivElement>(null)
  const align = {
    points: ['tl', 'bl'],
    offset: [0, 0],
  }

  return (
    <div>
      <div ref={refTarget}>AAAAAAAAAAAA</div>
      <Portal getContainer={() => document.body}>
        <Align align={align} target={() => refTarget.current!}>
          <div style={{ position: 'absolute' }}>1111</div>
        </Align>
      </Portal>
    </div>
  )
}

export const Basic = Template.bind({})
Basic.storyName = '基础用法'
Basic.args = {}


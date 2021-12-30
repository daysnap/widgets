
import React, {useRef} from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Trigger, { TriggerProps } from './index'

export default {
  title: 'Trigger',
  component: Trigger,
  argTypes: {},
} as Meta

const Template: Story<TriggerProps> = args => {

  const [visible, setVisible] = React.useState<boolean>(false)
  const targetNode: any = React.useRef<HTMLDivElement | null>(null)
  const childRef: any = useRef()

  const changeInput = ({ target } : any) => {
    childRef.current.open()
  }

  const alignProp = { visible, targetNode, childRef }

  console.log('alignProp => ', alignProp)

  return (
    <div ref={targetNode}>
      <input
        onChange={changeInput}
        onFocus={() => {
          if (visible) childRef.current.open()
          else setVisible(true)
        }}
      />
      <Trigger {...alignProp}>
        <div>1231232131</div>
      </Trigger>
    </div>
  )
}

export const Basic = Template.bind({})
Basic.storyName = '基础用法'
Basic.args = {}


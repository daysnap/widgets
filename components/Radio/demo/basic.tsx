
import React from 'react'
import { Radio } from '@daysnap/widgets'

export default () => {

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    console.log('e => ', e, e.target.value, e.target.checked)
  }
  const handleGroupChange = (e: any) => {
    console.log('checked => ', e)
  }

  return (
    <dl>
      <dt>基本信息</dt>
      <dd>
        <Radio onChange={handleChange}>单选框</Radio>
      </dd>
      <dd>
        <Radio.Group
          onChange={handleGroupChange}>
          {
            ['A', 'B', 'C', 'D'].map(key => <Radio value={key} key={key}>{key}</Radio>)
          }
        </Radio.Group>
      </dd>
    </dl>
  )
}

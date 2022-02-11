
import React from 'react'
import { Checkbox } from '@daysnap/widgets'

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
        <Checkbox onChange={handleChange}>复选框</Checkbox>
      </dd>
      <dd>
        <Checkbox.Group
          onChange={handleGroupChange}>
          {
            ['A', 'B', 'C', 'D'].map(key => <Checkbox value={key} key={key}>{key}</Checkbox>)
          }
        </Checkbox.Group>
      </dd>
    </dl>
  )
}


import React from 'react'
import { Input, Icon } from '@daysnap/widgets'

export default () => {
  const [value, setValue] = React.useState<string>('')
  const handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = e => {
    setValue(e.target.value)
  }

  const args: any = {
    placeholder: '请输入',
    clearable: false,
    showCount: false,
    maxLength: 11,
    disabled: false,
  }

  return (
    <dl>
      <dt>基础用法 值：{value}</dt>
      <dd>
        <Input
          {...args}
          value={value}
          onChange={handleChange}
        />
      </dd>
      <dd>
        <Input
          {...args}
          value={value}
          onChange={handleChange}
          prefix={<Icon icon="icon-loading"/>}
          suffix={<Icon icon="icon-sousuo"/>}
          clearable
        />
      </dd>
      <dd>
        <Input.Password
          {...args}
          value={value}
          showCount
          showPassword
          onChange={handleChange}
        />
      </dd>
      <dd>
        <Input.Textarea
          value={value}
          onChange={handleChange}
          autosize
          showCount
          placeholder={args.placeholder}
          maxLength={args.maxLength}
          disabled={args.disabled}
        />
      </dd>
    </dl>
  )
}

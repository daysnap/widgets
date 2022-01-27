
import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Form, { FormProps } from './index'
import Input from '../Input'
import Button from '../Button'

export default {
  title: 'Form',
  component: Form,
  argTypes: {},
} as Meta

const Template: Story<FormProps> = args => {

  const handleFinish = (e: any) => {
    console.log('handleFinish => ', e)
  }
  const handleFinishFailed = (e: any) => {
    console.log('handleFinishFailed => ', e)
  }

  return (
    <dl>
      <dt>基础用法</dt>
      <dd>
        <Form
          onFinish={handleFinish}
          onFinishFailed={handleFinishFailed}
          initialValues={{ account: '', password: '' }}
        >
          <Form.Item
            name="account"
            label="账号"
            rules={[ { required: true, message: '请输入账号' }, { type: 'email', message: '电子邮箱输入有误' } ]}
          >
            <Input clearable placeholder="请输入账号"/>
          </Form.Item>
          <Form.Item
            name="password"
            label="密码"
            rules={[ { required: true, message: '请输入密码' } ]}
          >
            <Input.Password placeholder="请输入密码"/>
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">登录</Button>
          </Form.Item>
        </Form>
      </dd>
    </dl>
  )
}

export const Basic = Template.bind({})
Basic.storyName = '基础用法'
Basic.args = {}


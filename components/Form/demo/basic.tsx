
import React from 'react'
import { Form, Button, Input, Radio, Checkbox } from '@daysnap/widgets'

export default () => {

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
          <Form.Item
            name="sex"
            label="性别"
            rules={[ { required: true, message: '请选择性别' } ]}
          >
            <Radio.Group>
              <Radio value="1">男</Radio>
              <Radio value="2">女</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="hobby"
            label="爱好"
            rules={[ { required: true, message: '请选择爱好' } ]}
          >
            <Checkbox.Group>
              <Checkbox value="1">篮球</Checkbox>
              <Checkbox value="2">足球</Checkbox>
              <Checkbox value="3">排球</Checkbox>
              <Checkbox value="4">游戏</Checkbox>
            </Checkbox.Group>
          </Form.Item>
          <Form.Item
            name="remark"
            label="备注"
            rules={[ { required: true, message: '请输入备注' } ]}
          >
            <Input.Textarea autosize placeholder="请输入备注"/>
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">登录</Button>
          </Form.Item>
        </Form>
      </dd>
    </dl>
  )
}


import React from 'react'
import ReactDOM from 'react-dom'
import { Dropdown, Button } from '@daysnap/widgets'
import Placements from '../placements'

export default () => {

  const Text = (props: any) => {
    return <div {...props}>123456</div>
  }
  const args: any = {
    placement: 'topLeft',
    trigger: 'click',
  }

  return (
    <dl>
      <dd>
        <Dropdown {...args}>
          <Text/>
          <Dropdown.Item disabled>帮助中心</Dropdown.Item>
          <Dropdown.Item>关于我们</Dropdown.Item>
          <Dropdown.Divider/>
          <Dropdown.Item>用户反馈</Dropdown.Item>
        </Dropdown>
      </dd>
      <dt>基本使用</dt>
      <dd>
        <Dropdown {...args}>
          <Button>菜单topLeft</Button>
          <Dropdown.Item disabled>帮助中心</Dropdown.Item>
          <Dropdown.Item>关于我们</Dropdown.Item>
          <Dropdown.Divider/>
          <Dropdown.Item>用户反馈</Dropdown.Item>
        </Dropdown>
      </dd>
      <dt>弹出位置</dt>
      <dd>
        {
          Object.keys(Placements).map((placement: any, index) => (
            <React.Fragment key={placement}>
              <Dropdown trigger="click" placement={placement}>
                <Button>{placement}</Button>
                <Dropdown.Item>用户反馈</Dropdown.Item>
              </Dropdown>
              {index % 2 === 0 && index !== 0}
            </React.Fragment>
          ))
        }
      </dd>
    </dl>
  )
}

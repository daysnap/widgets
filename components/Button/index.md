---
title: Button 按钮
nav:
  title: 组件
  order: 2
group:
  title: 反馈
  order: 1
---

# Button 按钮

按钮组件

## 代码演示

### 基本用法

<code src="./demo/basic.tsx"></code>

```jsx
import React from 'react'
import { Button } from '@daysnap/widgets'

export default () => <Button>按钮1</Button>
```

```jsx
import React from 'react'
import { Button } from '@daysnap/widgets'

export default () => {
  const args = {
    children: '按钮',
    loading: false,
    icon: 'icon-dianzan',
    type: 'primary',
    disabled: false,
  }
  const { disabled, icon } = args
  return (
      <dl>
        <dt>动态展示</dt>
        <dd>
          <Button {...args}></Button>
        </dd>
        <dt>基础用法</dt>
        <dd>
          <Button disabled={disabled}>默认按钮</Button>
          <Button disabled={disabled} type="primary">主要按钮</Button>
          <Button disabled={disabled} type="success">成功按钮</Button>
          <Button disabled={disabled} type="warning">警告按钮</Button>
          <Button disabled={disabled} type="danger">危险按钮</Button>
        </dd>
        <dd>
          <Button disabled={disabled} plain>默认按钮</Button>
          <Button disabled={disabled} plain type="primary">主要按钮</Button>
          <Button disabled={disabled} plain type="success">成功按钮</Button>
          <Button disabled={disabled} plain type="warning">警告按钮</Button>
          <Button disabled={disabled} plain type="danger">危险按钮</Button>
        </dd>
        <dd>
          <Button disabled={disabled} type="text">文字按钮</Button>
          <Button loading disabled={disabled} type="text">文字按钮</Button>
        </dd>
        <dd>
          <Button disabled={disabled} icon={icon} type="text"/>
          <Button disabled={disabled} icon={icon}/>
          <Button disabled={disabled} icon={icon} type="primary"/>
          <Button disabled={disabled} loading/>
        </dd>

        <dt>链接按钮</dt>
        <dd>
          <Button target="_blank" href="https://www.baidu.com" {...args}>跳转百度</Button>
        </dd>
        <dt>children 函数支持</dt>
        <dd>
          <Button {...args}>{ ({ icon, ...restProps }) => <a {...restProps} href="/">{ icon }导航按钮</a> }</Button>
        </dd>
      </dl>
    )
}
```


[comment]: <> (<API src="./index.tsx"></API>)

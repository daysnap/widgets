---
nav:
  title: 快速上手
  order: 1
---

# 快速上手

## 安装

**使用 npm 或 yarn 安装**

```shell
npm install @daysnap/widgets
```

```shell
yarn add @daysnap/widgets
```

## 示例

```js
import Button from '@daysnap/widgets/es/button' // 手动按需加载 js
import '@daysnap/widgets/es/button/style' // 手动按需加载样式

ReactDOM.render(<Button>普通按钮</Button>, mountNode)
```

### 自动按需加载

使用 [babel-plugin-import ](https://www.npmjs.com/package/babel-plugin-import) 优化引入方式，如下：

```js
import { Button } from '@daysnap/widgets' // 与上述示例等价

ReactDOM.render(<Button>普通按钮</Button>, mountNode)
```

安装 `babel-plugin-import`

```
yarn add babel-plugin-import --dev
```

配置`.babelrc` 或 `babel-loader`

```json5
{
  "plugins": [
    [
      "import",
      {
        "libraryName": "@daysnap/widgets",
        "libraryDirectory": "es", // default: lib
        "style": true // or 'css'
      }
    ]
  ]
}
```

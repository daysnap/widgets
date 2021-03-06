
// config https://d.umijs.org/zh-CN/config

import path from 'path'
import { defineConfig } from 'dumi'
import pkg from './package.json'

// 此处更换为自己的仓库名
let base: string | undefined = '/widgets'
let publicPath: string | undefined = '/widgets/'

if (process.env.SITE_BUILD_ENV === 'PREVIEW') {
  base = undefined;
  publicPath = undefined;
}

export default defineConfig({
  title: 'DaySnap Widgets',
  favicon: '/favicon.ico',
  logo: '/images/logo.png',
  mode: 'site',
  outputPath: 'doc-site',
  base,
  publicPath,
  styles: [],
  resolve: {
    includes: ['docs', 'components']
  },
  alias: {
    [pkg.name]: path.join(__dirname, './components'),
  },
  extraBabelPlugins:  [
    [
      'import',
      {
        libraryName: pkg.name,
        libraryDirectory: '',
        camel2DashComponentName: false,
        style: true,
      },
      pkg.name,
    ],
  ],
  locales: [['zh-CN', '中文'], ['en-US', 'English']],
  exportStatic: {}, // 后续会部署到 github pages 直接全部生成静态页面 不走前端路由
  dynamicImport: {}, // 拆包 站点过大时可以优化首屏加载速度
  webpack5: {},
  mfsu: {},
})


import path from 'path'
import { defineConfig } from 'dumi'
import pkg from './package.json'

// 此处更换为自己的仓库名
let base: string | undefined = '/daysnap-widgets'
let publicPath: string | undefined = '/daysnap-widgets/'

if (process.env.SITE_BUILD_ENV === 'PREVIEW') {
  base = undefined;
  publicPath = undefined;
}

export default defineConfig({
  title: 'DaySnap Widgets',
  // favicon: '',
  // logo: '',
  mode: 'site',
  outputPath: 'doc-site',
  base,
  publicPath,
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
        // camel2DashComponentName: false,
        customStyleName: () => {
          return `../style/index.scss`; // 注意：这里 ./ 不可省略
        },
      },
      // 'daysnap-widgets',
    ],
  ],
  sass: {
    // 默认值 Dart Sass，如果要改用 Node Sass，可安装 node-sass 依赖，然后使用该配置项
    // implementation: require('node-sass'),
    // 传递给 Dart Sass 或 Node Sass 的配置项，可以是一个 Function
    // sassOptions: {},
  },
  locales: [['zh-CN', '中文'], ['en-US', 'English']],
  exportStatic: {}, // 后续会部署到 github pages 直接全部生成静态页面 不走前端路由
  dynamicImport: {}, // 拆包 站点过大时可以优化首屏加载速度
  webpack5: {},
  mfsu: {},
})

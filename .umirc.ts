
import { defineConfig } from 'dumi'

// 此处更换为自己的仓库名
let base: string | undefined = '/daysnap-widgets'
let publicPath: string | undefined = '/daysnap-widgets/'

if (process.env.SITE_BUILD_ENV === 'PREVIEW') {
  base = undefined;
  publicPath = undefined;
}

export default defineConfig({
  title: 'DaySnap Widgets',
  mode: 'site',
  outputPath: 'doc-site',
  base,
  publicPath,
  resolve: {
    includes: ['docs', 'components']
  },
  exportStatic: {}, // 后续会部署到 github pages 直接全部生成静态页面 不走前端路由
  dynamicImport: {}, // 拆包 站点过大时可以优化首屏加载速度
  webpack5: {},
  mfsu: {},
})


import { defineConfig } from 'dumi'

export default defineConfig({
  title: 'DaySnap Widgets',
  mode: 'site',
  outputPath: 'doc-site',
  exportStatic: {}, // 后续会部署到 github pages 直接全部生成静态页面 不走前端路由
  dynamicImport: {}, // 拆包 站点过大时可以优化首屏加载速度
})

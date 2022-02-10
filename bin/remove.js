
const { execSync } = require('child_process')
const rimraf = require('rimraf')
const { rc } = require('./utils')

module.exports = plop => {
  plop.setGenerator('remove', {
    description: '删除一个组件',
    prompts: [
      { type: 'input', name: 'name', message: '请输入组件名称？' },
      { type: 'confirm', name: 'ok', message: '确认删除该组件？' },
    ],
    actions: (res) => {
      const { name, ok } = res
      if (ok) {
        const dirname = plop.getHelper('pascalCase')(name)
        rimraf.sync(rc(dirname))
        console.log('✔ 删除成功')
        execSync('npm run entry')
      }
      return []
    }
  })
}

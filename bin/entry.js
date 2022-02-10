
const { requireFilePath, rc, rt, requireDirname } = require('./utils')

const components = requireDirname(
  requireFilePath(rc(), true, /\/index\.tsx$/)
)

console.log('components => ', components)

module.exports = plop => {
  plop.setGenerator('entry', {
    description: '创建入口文件',
    prompts: [],
    actions: [
      {
        type: 'add',
        path: rc('index.tsx'),
        templateFile: rt('entry.hbs'),
        data: { components },
      },
    ]
  })
}

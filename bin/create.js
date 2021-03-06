
const { execSync } = require('child_process')
const { rt: rtc, rc } = require('./utils')

const rt = (...args) => rtc('component', ...args)

module.exports = plop => {
  plop.setActionType('end', async () => {
    execSync(`npm run entry`)
  })
  plop.setGenerator('component', {
    description: '创建一个新组件',
    prompts: [
      { type: 'input', name: 'name', message: '请输入组件名称？' },
    ],
    actions: [
      {
        type: 'add',
        path: rc('{{ pascalCase name }}/index.tsx'),
        templateFile: rt('index.hbs'),
      },
      {
        type: 'add',
        path: rc('{{ pascalCase name }}/{{ pascalCase name }}.tsx'),
        templateFile: rt('component.hbs'),
      },
      {
        type: 'add',
        path: rc('{{ pascalCase name }}/style/index.ts'),
        templateFile: rt('style/index.hbs'),
      },
      {
        type: 'add',
        path: rc('{{ pascalCase name }}/style/index.scss'),
        templateFile: rt('style/style.hbs'),
      },
      {
        type: 'add',
        path: rc('{{ pascalCase name }}/index.md'),
        templateFile: rt('doc.hbs'),
      },
      {
        type: 'add',
        path: rc('{{ pascalCase name }}/interface.ts'),
        templateFile: rt('interface.hbs'),
      },
      {
        type: 'add',
        path: rc('{{ pascalCase name }}/demo/basic.tsx'),
        templateFile: rt('demo/basic.hbs'),
      },
      {
        type: 'end',
      }
    ]
  })
}

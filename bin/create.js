
const { execSync } = require('child_process')
const inquirer = require('inquirer')
const humps = require('humps')
const fileSave = require('file-save')
const render = require('json-templater/string')
const { requireFilePath, resolve, requireDirname } = require('./utils')

const componentName = process.argv[2]
const TEMPLATE_JS = `
import {{name}} from './{{name}}'

import './index.scss'

export { default as {{name}} } from './{{name}}'
export type { {{name}}Props } from './{{name}}'

export default {{name}}
`
const TEMPLATE_STORIES = `
import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import {{name}}, { {{name}}Props } from './index'

export default {
  title: '{{name}}',
  component: {{name}},
  argTypes: {},
} as Meta

const Template: Story<{{name}}Props> = args => <{{name}} {...args} />

export const Basic = Template.bind({})
Basic.storyName = '基础用法'
Basic.args = {}
`
const TEMPLATE_COMPONENT = `
import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'

export interface {{name}}Props {
  className?: string
}

const {{name}}: React.FC<{{name}}Props> = ({
  className,
  ...restProps
}) => {

  const cls = createPrefixCls('{{tagName}}')
  const classes = classnames(
    \`\${cls}\`,
    className,
  )

  return (
    <div
      {...restProps}
      className={classes}
    />
  )
}

export default {{name}}
`
const TEMPLATE_SCSS = `
@import "../assets/scss/define.scss";

@include b({{tagName}}){

}
`

;(componentName
    ? Promise.resolve({ componentName })
    : inquirer.prompt([
        {
            type: 'input',
            message: '请输入创建的组件名称：',
            name: 'componentName',
        }
    ])
).then(res => {

    const { componentName } = res
    const name = humps.pascalize(componentName)
  const tagName = humps.decamelize(componentName, { separator: '-' })
    const arrDirNames = requireDirname(requireFilePath(resolve('components'), true, /\/index\.tsx$/))
    if (arrDirNames.includes(name)) {
        console.error(`${name} 已存在.`)
        process.exit(1)
    }

    const output = resolve(`components/${name}`)

    fileSave(`${output}/index.tsx`)
        .write(render(TEMPLATE_JS, {
            name,
        }))
        .end('\n')

    fileSave(`${output}/index.stories.tsx`)
        .write(render(TEMPLATE_STORIES, {
            name,
        }))
        .end('\n')

    fileSave(`${output}/${name}.tsx`)
        .write(render(TEMPLATE_COMPONENT, {
            name,
            tagName,
        }))
        .end('\n')

    fileSave(`${output}/index.scss`)
        .write(render(TEMPLATE_SCSS, {
            name,
            tagName,
        }))
        .end('\n')

    console.log('[create] DONE：', output)

    execSync(`node ./bin/entry.js`)

}).catch(err => {
    console.log('[create] CANCEL!', err)
})

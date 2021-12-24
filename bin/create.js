
const { execSync } = require('child_process')
const inquirer = require('inquirer')
const humps = require('humps')
const fileSave = require('file-save')
const render = require('json-templater/string')
const { requireFilePath, resolve, requireDirname } = require('./utils')

let componentName = process.argv[2]
const TEMPLATE_JS = `
import Component from './index.vue'

Component.install = function (Vue) {
    Vue.component(Component.name, Component);
}

export default Component
`
const TEMPLATE_STORIES = `
import {{componentName}} from './index'

export default {
    title: '{{componentName}}',
    component: {{componentName}},
    argTypes: {},
}

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { {{componentName}} },
    template: \`<{{tagName}} v-bind="$props" />\`,
})

export const Basic = Template.bind({})
Basic.storyName = '基础用法'
Basic.args = {}
`
const TEMPLATE_VUE = `
<template>
    <div class="{{tagName}}">

    </div>
</template>

<script>
    export default {
        name: '{{componentName}}'
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/define";
</style>
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

    let { componentName } = res
    if (!componentName.toLocaleLowerCase().startsWith('as')) {
        componentName = `as-${componentName}`
    }

    componentName = humps.pascalize(componentName)
    const tagName = humps.decamelize(componentName, { separator: '-' })
    const arrDirNames = requireDirname(requireFilePath(resolve('ui/packages'), true, /\/index\.js$/))
    if (arrDirNames.includes(tagName)) {
        console.error(`${tagName} 已存在.`)
        process.exit(1)
    }

    const output = resolve(`ui/packages/${tagName}`)

    fileSave(`${output}/index.js`)
        .write(TEMPLATE_JS)
        .end('\n')

    fileSave(`${output}/index.stories.js`)
        .write(render(TEMPLATE_STORIES, {
            componentName,
            tagName,
        }))
        .end('\n')

    fileSave(`${output}/index.vue`)
        .write(render(TEMPLATE_VUE, {
            componentName,
            tagName,
        }))
        .end('\n')

    console.log('[create] DONE：', output)

    execSync(`node ./bin/entry.js`)

}).catch(err => {
    console.log('[create] CANCEL!', err)
})

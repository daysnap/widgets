
const fs = require('fs')
const endOfLine = require('os').EOL
const humps = require('humps')
const render = require('json-templater/string')
const { requireFilePath, resolve, requireDirname } = require('./utils')

const OUTPUT = resolve('ui/index.js')
const TEMPLATE_IMPORT = `import {{name}} from './packages/{{dirname}}'`
const TEMPLATE_EXPORT = `export { default as {{name}} } from './packages/{{dirname}}'`
const TEMPLATE = `
/* 本文件自动生成 './bin/entry.js' */

{{import}}

{{export}}

export const components = [
    {{components}}
]

export default {
    version: '{{version}}',
    install (Vue) { components.forEach(item => Vue.use(item)) },
    {{list}}
}
`

const {
    templateImport,
    templateExport,
    templateComponents,
} = (s =>
    requireDirname(s).reduce((r, dirname) => {
        const { templateImport, templateExport, templateComponents } = r
        const name = humps.pascalize(dirname)
        templateImport.push(render(TEMPLATE_IMPORT, { name, dirname }))
        templateExport.push(render(TEMPLATE_EXPORT, { name, dirname }))
        templateComponents.push(name)
        return r
    }, { templateImport: [], templateExport: [], templateComponents: [] })
)(requireFilePath(resolve('ui/packages'), true, /\/index\.js$/))

const content = render(TEMPLATE, {
    version: require('../package.json').version,
    import: templateImport.join(endOfLine),
    export: templateExport.join(endOfLine),
    components: templateComponents.join(`,${endOfLine}    `),
    list: templateComponents.join(`,${endOfLine}    `),
})

fs.writeFileSync(OUTPUT, content)

console.log('[entry] DONE:', OUTPUT)

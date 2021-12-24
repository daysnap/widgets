
const fs = require('fs')
const endOfLine = require('os').EOL
const humps = require('humps')
const render = require('json-templater/string')
const { requireFilePath, resolve, requireDirname } = require('./utils')

const OUTPUT = resolve('components/index.ts')
const TEMPLATE_EXPORT = `
export type { {{name}}Props } from './{{name}}'
export { default as {{name}} } from './{{name}}'`

const TEMPLATE = `
/* 本文件自动生成 './bin/entry.js' */
{{export}}
`
const {
    templateExport,
} = (s =>
    requireDirname(s).reduce((r, dirname) => {
        const { templateExport } = r
        const name = humps.pascalize(dirname)
        templateExport.push(render(TEMPLATE_EXPORT, { name, dirname }))
        return r
    }, { templateExport: [] })
)(requireFilePath(resolve('components'), true, /\/index\.tsx$/))

const content = render(TEMPLATE, {
    version: require('../package.json').version,
    export: templateExport.join(endOfLine),
})

fs.writeFileSync(OUTPUT, content)

console.log('[entry] DONE:', OUTPUT)


const { execSync } = require('child_process')
const { rmDir, resolve } = require('./utils')
const inquirer = require('inquirer')
const humps = require('humps')


let componentName = process.argv[2]
const isY = process.argv.includes('yes') || process.argv.includes('y')

;(componentName
    ? Promise.resolve({ componentName })
    : inquirer.prompt([
        {
            type: 'input',
            message: '请输入删除的组件名称：',
            name: 'componentName',
        },
    ])
).then(res => {
    componentName = humps.pascalize(res.componentName)
    return inquirer.prompt([
        {
            type: 'confirm',
            message: `确认删除：${componentName} ？`,
            name: 'ok',
            when: () => !isY,
        },
    ])
}).then(res => {
    if (!res.ok && !isY) throw '取消删除'

    // 开始删除
    const dirPath = resolve(`components/${componentName}`)
    rmDir(dirPath)

    console.log('[remove] DONE：', dirPath)

    execSync(`node ./bin/entry.js`)

}).catch(err => {
    console.log('[remove] CANCEL!', err)
})

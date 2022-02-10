
const { exec } = require('child_process')
const ora = require('ora')
const fs = require('fs')
const { r } = require('./utils')

const spinner = ora('正在发布...')
const execAsync = cmd => new Promise((resolve, reject) => {
    exec(cmd, (err,stdout,stderr) => {
        if (err || stderr) reject(err || stderr)
        else resolve(stdout)
    })
})

spinner.start()

execAsync(`npm run tsc`)
    .then(() => execAsync(`npm view as-cocoon version --registry https://registry.npmjs.org`))
    .then(version => fs.writeFileSync(r('package.json'), JSON.stringify(Object.assign(require('../package.json'), { version: version.trim() }), null, 2)))
    .then(() => execAsync(`npm version patch --no-git-tag-version`))
    .then(() => execAsync(`npm run entry`))
    .then(() => execAsync(`npm publish`))
    .then(res => console.log(res))
    .catch(err => console.error(err))
    .finally(() => {
        spinner.stop()
        process.exit(0)
    })

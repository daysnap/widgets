
const path = require('path')
const nodeDir = require('node-dir')
const { exec } = require('child_process')

const r = (...args) => path.resolve(__dirname, '..', ...args)
const rt = (...args) => r('bin/templates', ...args)
const rc = (...args) => r('components', ...args)

const execAsync = cmd => new Promise((resolve, reject) => {
  exec(cmd, (err,stdout,stderr) => {
    if (err || stderr) reject(err || stderr)
    else resolve(stdout)
  })
})

const requireFilePath = (directory = '', recursive, regExp) => {
  if (directory[0] === '.') {
    // Relative path
    directory = path.join(__dirname, directory)
  } else if (!path.isAbsolute(directory)) {
    // Module path
    directory = require.resolve(directory)
  }
  return nodeDir
    .files(directory, {
      sync: true,
      recursive: recursive || false
    })
    .filter((file) =>  {
      return file.replace(/\\/g, '/').match(regExp || /\.(json|js|tsx)$/)
    })
}

const requireDirname = (data) => {
  const reg = /components\/(.+)\/index\.tsx$/
  return data.map(p => {
    const res = p.replace(/\\/g, '/').match(reg)
    return res ? res[1] : ''
  }).filter(Boolean)
}

module.exports = {
  r,
  rt,
  rc,
  requireFilePath,
  requireDirname,
  execAsync,
}


const path = require('path')
const nodeDir = require('node-dir')

const r = (...args) => path.resolve(__dirname, '..', ...args)
const rt = (...args) => r('bin/templates', ...args)
const rc = (...args) => r('components', ...args)

function requireFilePath (directory = '', recursive, regExp) {
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

function requireDirname (data) {
  console.log('data => ', data)
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
}

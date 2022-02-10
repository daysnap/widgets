
const path = require('path')
const fs = require('fs')
const nodeDir = require('node-dir')

const r = (...args) => path.resolve(__dirname, ...args)
const rt = (...args) => r('./templates', ...args)
const rc = (...args) => r('../components', ...args)
const resolve = (dir = '') => path.join(__dirname, '..', dir)

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

function rmDir(path){
  let files = [];
  if(fs.existsSync(path)){
    files = fs.readdirSync(path);
    files.forEach((file, index) => {
      let curPath = path + "/" + file;
      if(fs.statSync(curPath).isDirectory()){
        rmDir(curPath); //递归删除文件夹
      } else {
        fs.unlinkSync(curPath); //删除文件
      }
    });
    fs.rmdirSync(path);
  }
}

module.exports = {
  r,
  rt,
  rc,
  rmDir,
  resolve,
  requireFilePath,
  requireDirname,
}

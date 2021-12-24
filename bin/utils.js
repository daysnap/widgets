
const path = require('path')
const fs = require('fs')
const nodeDir = require('node-dir')

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
            return file.replace(/\\/g, '/').match(regExp || /\.(json|js)$/)
        })
}

function requireDirname (data) {
    const reg = /packages\/(.+)\/index\.js$/
    return data.map(p => p.replace(/\\/g, '/').match(reg)[1])
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
    rmDir,
    resolve,
    requireFilePath,
    requireDirname,
}


const gulp = require('gulp')
const babel = require('gulp-babel')
const sass = require('gulp-sass')(require('sass'))
const autoprefixer = require('gulp-autoprefixer')
const cssnano = require('gulp-cssnano')
const through2 = require('through2')

const paths = {
  dest: {
    lib: 'lib', // commonjs 文件存放的目录名 - 本块关注
    esm: 'esm', // ES module 文件存放的目录名 - 暂时不关心
    dist: 'dist', // umd文件存放的目录名 - 暂时不关心
  },
  styles: 'components/**/*.scss', // 样式文件路径 - 暂时不关心
  scripts: [
    'components/**/*.{ts,tsx}',
    '!components/**/demo/*.{ts,tsx}'
  ], // 脚本文件路径
}

function cssInjection(content) {
  return content
    .replace(/\/style\/?'/g, "/style/css'")
    .replace(/\/style\/?"/g, '/style/css"')
    .replace(/\.scss/g, '.css');
}

function compileScripts(babelEnv, destDir) {
  const { scripts } = paths
  // 设置环境变量
  process.env.BABEL_ENV = babelEnv
  return gulp
    .src(scripts)
    .pipe(babel()) // 使用gulp-babel处理
    .pipe(
      through2.obj(function z(file, encoding, next) {
        this.push(file.clone())
        // 找到目标
        if (file.path.match(/(\/|\\)style(\/|\\)index\.js/)) {
          const content = file.contents.toString(encoding)
          file.contents = Buffer.from(cssInjection(content)) // 文件内容处理
          file.path = file.path.replace(/index\.js/, 'css.js') // 文件重命名
          this.push(file) // 新增该文件
          next()
        } else {
          next()
        }
      })
    )
    .pipe(gulp.dest(destDir))
}

function compileCJS() {
  const { dest } = paths
  return compileScripts('cjs', dest.lib)
}

function compileESM() {
  const { dest } = paths
  return compileScripts('esm', dest.esm)
}

function copyStyle() {
  const { dest, styles } = paths
  return gulp.src(styles).pipe(gulp.dest(dest.lib)).pipe(gulp.dest(dest.esm))
}

function sass2css() {
  return gulp
    .src(paths.styles)
    .pipe(sass()) // 处理less文件
    .pipe(autoprefixer()) // 根据browserslistrc增加前缀
    .pipe(cssnano({ zindex: false, reduceIdents: false })) // 压缩
    .pipe(gulp.dest(paths.dest.lib))
    .pipe(gulp.dest(paths.dest.esm))
}

// 串行执行编译脚本任务（cjs,esm） 避免环境变量影响
const buildScripts = gulp.series(compileCJS, compileESM)

// 整体并行执行任务
const build = gulp.parallel(buildScripts, copyStyle, sass2css)

exports.build = build

exports.default = build
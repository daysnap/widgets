
const gulp = require('gulp')
const babel = require('gulp-babel')

const paths = {
  dest: {
    lib: 'lib', // commonjs 文件存放的目录名 - 本块关注
    esm: 'esm', // ES module 文件存放的目录名 - 暂时不关心
    dist: 'dist', // umd文件存放的目录名 - 暂时不关心
  },
  styles: 'src/**/*.less', // 样式文件路径 - 暂时不关心
  scripts: [
    'src/**/*.{ts,tsx}',
    '!src/**/demo/*.{ts,tsx}'
  ], // 脚本文件路径
}

function compileCJS() {
  const { dest, scripts } = paths;
  return gulp
    .src(scripts)
    .pipe(babel()) // 使用gulp-babel处理
    .pipe(gulp.dest(dest.lib))
}

// 并行任务 后续加入样式处理 可以并行处理
const build = gulp.parallel(compileCJS)

exports.build = build;

exports.default = build;

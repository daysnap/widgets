
module.exports = {
  cjs: {
    src: [
      'components/**/*.{ts,tsx}',
      '!components/**/demo/*.{ts,tsx}',
      'components/**/*.scss',
    ],
    dest: 'lib',
  },
  esm: {
    src: [
      'components/**/*.{ts,tsx}',
      '!components/**/demo/*.{ts,tsx}',
      'components/**/*.scss',
    ],
    dest: 'es'
  }
}

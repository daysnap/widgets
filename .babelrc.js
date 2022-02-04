
// https://github.com/worldzhao/blog/issues/5

// 若helpers选项设置为true，可抽离代码编译过程重复生成的 helper 函数（classCallCheck,extends等），减小生成的代码体积；
// 若corejs设置为3，可引入不污染全局的按需polyfill，常用于类库编写（我更推荐：不引入polyfill，转而告知使用者需要引入何种polyfill，避免重复引入或产生冲突，后面会详细提到）。

// module.exports = {
//   presets: [
//     '@babel/env',
//     '@babel/typescript',
//     '@babel/react'
//   ],
//   plugins: [
//     '@babel/proposal-class-properties',
//     [
//       '@babel/plugin-transform-runtime',
//       {
//         corejs: 3,
//         helpers: true,
//       },
//     ],
//   ],
// }


// module.exports = {
//   presets: [
//     [
//       '@babel/env',
//       {
//         modules: false, // 关闭模块转换
//       },
//     ],
//     '@babel/typescript',
//     '@babel/react'
//   ],
//   plugins: [
//     '@babel/proposal-class-properties',
//     [
//       '@babel/plugin-transform-runtime',
//       {
//         useESModules: true, // 使用esm形式的helper
//       },
//     ],
//   ],
// }

module.exports = {
  presets: [
    '@babel/env',
    '@babel/typescript',
    '@babel/react'
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/proposal-class-properties'
  ],
  env: {
    esm: {
      presets: [
        [
          '@babel/env',
          {
            modules: false,
          },
        ],
      ],
      plugins: [
        [
          '@babel/plugin-transform-runtime',
          {
            useESModules: true,
          },
        ],
      ],
    },
  },
};
# webpack-bbq

## Supported Features

✔︎ 转化 src 到 lib  
✔︎ 生成 app-revisions.json  
✔︎ 装配 loaders: javascript, stylesheets, json, fonts, images, medias  
✔︎ 兼容 Node.js: process.env.NODE_ENV 和 \_\_dirname, \_\_filename  
✔︎ server rendering  
✔︎ static rendering  

--------------

# webpack-bbq/libify

Show Your Webpack Loader Transformed Source!

## 约定

- 使用到的 src 源码需要转化到 lib 中
- src 中 require 的 id 不需要进行改变: abc.css -> abc.css.js, abc.jsx -> abc.jsx.js
- 支持 ts 和 tsx 文件，ts 文件配合resolve.extensions直接引入, abc.ts -> abc.js
- 所有 lib 中的模块 node 可运行

## 用法

```js
// in your webpack.config.js
const libify = require.resolve('webpack-bbq/libify');

module.rules: [ { loader: libify, enforce: 'post', options: { webpackConfigPath } } ]
```

## __webpack_public_path__

基于 `require('js-tokens')` 技术，
使用类 `require("../webpack.config")[0].output.publicPath` 替换掉 \_\_webpack_public_path\_\_

--------------

# AppRevisions Generator for Webpack

Webpack Plugin that generates a app-resisions of bundled files.

## Usage

```javascript
// webpack.config.js  
var AppRevisionsGenerator = require('webpack-bbq/AppRevisionsGenerator');

var config = {
  ...
  entry: {
    "bundle": "./src/application.js",
    "vendors": "./vendors/vendors.js"
  },
  output: {
    path: './public/assets/',
    filename: 'js/[name]-[hash].js',
    publicPath: "http://example.com/assets"
  },
  plugins: {
    new AppRevisionsGenerator("PATH_TO_DEST_DIRECTORY")
  }
  ...
}

module.exports = config;
```

## Output

```json
{
  "bundle.js": "js/bundle-f34dc68a3493edfcaa3a.js",
  "vendors.js": "js/vendors-13adcef238710a91e834.js"
}
```

# mtui-uniapp 组件库
*** 
##### 本人只用uniapp做过`h5`和`安卓app`，并不一定支持其他平台（慎用），期盼对您能有所帮助 :innocent: :innocent:
*** 
#### 在使用 MtUI UNI版 前，请确保你已经学习并熟练使用过 [uni-app](https://uniapp.dcloud.io/) 。

#
### 方式一 ：通过 npm 安装（只适用h5）

#### 使通过 npm 安装，需要先通过 vue-cli 创建 uni-app 项目，[详见](https://uniapp.dcloud.io/quickstart-cli)

```bash
npm install mtui-uni --save
```

```javascript
//在 main.js 中引入组件库
import Vue from 'vue'

import mtui from "mtui-uni";
Vue.use(mtui);
``` 

```scss
<style lang="scss">
@import "mtui-uni/src/components/mt-theme/iconfont/iconfont.css";
</style>
```

```scss
//在 uni.scss 中引入组件样式
@import "mtui-uni/src/components/mt-theme/index.scss";
```

#
### 方式二 ：通过下载代码（适用h5，app）

#### 通过 GitHub 下载组件，将 `src/components/` `/static` 目录拷贝到自己的项目中。

```bash
git clone https://github.com/lacey-lmq/mtui-uniapp.git
```

```scss
<style lang="scss">
@import "./components/mt-theme/iconfont/iconfont.css";
</style>
```

```scss
//在 uni.scss 中引入组件样式
@import "./components/mt-theme/index.scss";
```

#
### 方式三 ：选择需要的模块引入
#### 下载 Mt UI 的代码，在 `src/components/` 目录下找到需要的组件拷贝到自己的项目中。

```bash
git clone https://github.com/lacey-lmq/mtui-uniapp.git
```

##### 在 `src/components/mt-theme` 目录下找到需要的组件样式拷贝到项目中。

```scss
<style lang="scss">
@import "./components/mt-theme/iconfont/iconfont.css";
</style>
```

```scss
//在 uni.scss 中引入组件样式
@import "./components/mt-theme/mt-box.scss";
```

# 引入Utils文件

***

#     

```javascript
//在 main.js 中引入Utils方法

import Vue from 'vue';
import Utils from "mtui-uni/src/common/mt-utils/index";


Vue.prototype.$mt = new Utils({
    debug: false, // debug模式

    serveMode: 'formal', // 当前环境

    serveModeArr: ['default'], // 模块接口前缀列表

    // 环境对象集
    serveModeObj: {
        online: {
            defaultHost: 'http://gz.gisocn.com:6342/'
        },
        formal: {
            defaultHost: 'http://gz.gisocn.com:6342/'
        }
    },

    // 接口集合
    urlData: {
        getFormData: '/api/common/getJsonFormByKey'
    },

    hasToken: false, // 是否需要token
    tokenName: 'token', // token的别名
    settings: {} // 水印参数
});
```

# 配置项参数

| 参数         | 默认值                                                                                                                                                                                                                                     | 类型    | 说明                                                                    |
| ------------ |-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| ------- |-----------------------------------------------------------------------|
| debug        | false                                                                                                                                                                                                                                   | `Boolean` | 是否打开调试模式                                                              |
| serveMode    | formal                                                                                                                                                                                                                                  | `String`  | 当前环境：参数取`serveModeObj的key`                                            |
| serveModeArr | `['default']`                                                                                                                                                                                                                           | `Array`   | 模块接口前缀列表                                                              |
| serveModeObj | {`online: {defaultHost: 'http://172.30.200.92:6342/'}`, `formal: {defaultHost: 'http://gz.gisocn.com:6342/'}`}                                                                                                                          | `Object`  | 环境对象集                                                                 |
| urlData      | `{getFormData: '/api/common/getJsonFormByKey'}`                                                                                                                                                                                         | `Object`  | 接口集合                                                                  |
| hasToken     | false                                                                                                                                                                                                                                   | `Boolean` | 接口中是否需要token，true：需要在登陆后将token存入：`uni.setStorageSync("token", token)` |
| tokenName    | token                                                                                                                                                                                                                                   | `String`  | 接口中的`token的key值`                                                      |
| settings     | {`textArr: ['mtui', 'uniapp']`, `font: "15px '微软雅黑'"`, `fillStyle: 'rgba(100,47,47,0.1)'`, `maxWidth: 200`, `minWidth: 120`, `lineHeight: 24`, `deg: -30`, `marginRight: 30`, `marginBottom: 50`, `left: 20`, `top: 20` } | `Object`  | 水印参数, 详情如下：                                                           |

### settings 说明

| 参数         | 默认值               | 类型   | 说明                           | 是否必填 |
| ------------ | -------------------- | ------ | ------------------------------ | -------- |
| textArr      | `['mtui', 'uniapp']` | `Array`  | 需要展示的文字，多行就多个元素 | true     |
| font         | `15px '微软雅黑'`      | `String` | 字体样式                       | false    |
| fillStyle    | `rgba(100,47,47,0.1)`  | `String` | 描边样式                       | false    |
| maxWidth     | 200                  | `Number` | 文字水平时最大宽度             | false    |
| minWidth     | 120                  | `Number` | 文字水平时最小宽度             | false    |
| lineHeight   | 24                   | `Number` | 文字行高                       | false    |
| deg          | -30                  | `Number` | 旋转的角度 0至-90之间          | false    |
| marginRight  | 30                   | `Number` | 每个水印的右间隔               | false    |
| marginBottom | 50                   | `Number` | 每个水印的下间隔               | false    |
| left         | 20                   | `Number` | 整体背景距左边的距离           | false    |
| top          | 20                   | `Number` | 整体背景距上边的距离           | false         |


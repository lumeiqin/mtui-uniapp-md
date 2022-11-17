# Tabbar
***
#

[//]: # (<iframe width='375px' height='667px' frameborder=0 allowfullscreen="true" src="https://static-363fc8f1-c547-4a87-8d04-6d5ba4035deb.bspapp.com/#/pages/tabbar"></iframe>)

```html
<!-- 基础用法 -->
<mt-tabbar :data="tabbarData"></mt-tabbar>
```

```javascript
export default {
    data() {
        return {
            tabbarData: [{
                isactive: 1,
                path: "/pages/index/index",
                icon: '../../static/tab/tab0.png',
                selectedIcon: '../../static/tab/itab0.png',
                iconWidth: '45px',
                iconHeight: '45px'
            }, {
                path: "/pages/reportForm/index",
                icon: '../../static/tab/tab1.png',
                selectedIcon: '../../static/tab/itab1.png',
                iconWidth: '45px',
                iconHeight: '45px'
            }, {
                path: "/pages/addressList/index",
                icon: '../../static/tab/tab2.png',
                selectedIcon: '../../static/tab/itab2.png',
                iconWidth: '45px',
                iconHeight: '45px'
            }, {
                path: "/pages/person/index",
                icon: '../../static/tab/tab3.png',
                selectedIcon: '../../static/tab/itab3.png',
                iconWidth: '45px',
                iconHeight: '45px'
            }],
        }
    }
}
```

# Props

| 参数   | 默认值 | 类型                 | 说明               | 可选值 | 是否必填 | 
| ------ | ------ |--------------------| ------------------ | ------ | -------- |
| emit   | false  | `Boolean` `String` | 是否触发自定义方法 | -       | false |
| data   | `[]`     | `Array`            | tabbar数据    | -      |   true    |
| config | `{}`     | `Object`           | 自定义参数         | -      | false    |

### config 说明

| 参数          | 默认值  | 类型   | 说明           | 可选值 |
| ------------- | ------- | ------ | -------------- | ------ |
| bg            | #fff    | `String` | tabbar 背景    | -      |
| height        | 128rpx  | `String` | tabbar 高度    | -      |
| color         | #333    | `String` | 字体颜色       | -      |
| selectedColor | #2194F2 | `String` | 选中的字体颜色 | -      |
| fontsize      | 24rpx   | `String` | 字体大小       | -       |

### data 说明

| 参数         | 默认值    | 类型   | 说明                                                   | 是否必填 | 可选值             |
| ------------ | --------- | ------ | ------------------------------------------------------ | -------- |-----------------|
| text         | 测试      | `String` | tab 按钮文字                                           | 是       | -               |
| path         | -         | `String` | 页面路径，必须在 pages 中先定义                        | 是       | -               |
| icontype     | -         | `String` | 字体图标，优先级高于 icon                              | 否       | -               |
| iconWidth    | 24 / 24px | `String` | 当选用icon时，为图标宽度；当选用icontype时，为图标尺寸 | 否       | -               |
| iconHeight   | 24px      | `String` | 选用icon时，为图标高度                                 | 否       | -               |
| spaceing     | 0         | `String` | 图标的margin                                           | 否       | -               |
| isactive     | 0         | `Number` | tab 是否选中                                           | 否       | `0：未选中` `1：已选中` |
| icon         | -         | `String` | 未选中图标地址                                         | 否       | -               |
| selectedIcon | -         | `String` | 已选中图标地址                                         | 否       | -               |

# Events

| 事件  | 说明                      | 回调参数         |
| ----- | ------------------------- |--------------|
| click | `emit=true：点击模块时触发` | `当前模块: item` |


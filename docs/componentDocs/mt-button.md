# Button
***
# 

[//]: # (<iframe width='375px' height='667px' frameborder=0 allowfullscreen="true" src="https://static-363fc8f1-c547-4a87-8d04-6d5ba4035deb.bspapp.com/#/pages/button"></iframe>)

```html
<!-- 基础用法 -->
<mt-button @click="clickEvent">测试</mt-button>


<!-- name=hollow 基础使用-->
<mt-button name="hollow">测试</mt-button>


<!-- name=hollow 无边框 -->
<mt-button name="hollow" :config="hollowConfig">测试</mt-button>


<!-- 禁用按钮 -->
<mt-button disabled>测试</mt-button>


<!-- 显示loading图标 -->
<mt-button loading>测试</mt-button>


<!-- 自定义参数 -->
<mt-button :config="buttonConfig">测试</mt-button>
<mt-button name="hollow" :config="buttonConfig">测试</mt-button>
```

```javascript
export default {
    data() {
        return {
            hollowConfig: {
                radius: "60rpx",
                noBorder: true
            },
            buttonConfig: {
                radius: "80rpx",
                height: "100rpx",
                color: "#EF6D6D",
                fontsize: "36rpx",
                shadow: "0px 3px 4px rgba(244,124,127,0.3)"
            }
        }
    },
    methods: {
        clickEvent() {
            uni.showToast({
                title: "触发点击事件",
                icon: "none"
            })
        }
    }
}
```



# Props

| 参数     | 默认值  | 类型                 | 说明              | 可选值          |是否必要 |
| -------- | ------- |--------------------| ----------------- | --------------- |--------------- |
| name     | default | `String`           | 按钮类型          | `default` `hollow` | false|
| disabled | false   | `Boolean` `String` | 是否禁用          | -               | false|
| loading  | false   | `Boolean` `String` | 是否显示loading图标 | -               | false|
| config   | `{}`      | `Object`           | 自定义参数        | -                | false|

### config 说明

| 参数     | 默认值                          | 类型    | 说明                                | 可选值 |
| -------- | ------------------------------- | ------- |-----------------------------------| ------ |
| radius   | 8rpx                            | `String`  | 按钮圆角                              | -      |
| height   | 84rpx                           | `String`  | 按钮高度                              | -      |
| color    | #2194F2                         | `String`  | `default：按钮背景颜色` `hollow：按钮字体和边框颜色` | -      |
| fontsize | 30rpx                           | `String`  | 字体大小                              | -      |
| shadow   | 0px 3px 8px 0px rgba(0,0,0,0.1) | `String`  | 按钮阴影                              | -      |
| noBorder | false                           | `Boolean` | `hollow：是否不显示边框`                    | -      |

# Slots

| 插槽名 | 默认值 | 说明 |
| ------ | ------ | ---- |
| -      | -      | 按钮内容     |

# Events

| 事件  | 说明           | 回调参数 |
| ----- | -------------- | -------- |
| click | 点击按钮时触发 | -         |

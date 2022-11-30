# Box
***
#  

[//]: # (<iframe width='375px' height='667px' frameborder=0 allowfullscreen="true" src="https://static-363fc8f1-c547-4a87-8d04-6d5ba4035deb.bspapp.com/#/pages/box"></iframe>)

[查看案例](https://static-363fc8f1-c547-4a87-8d04-6d5ba4035deb.bspapp.com/#/pages/base/box)

```html
<!-- 基础用法 -->
<mt-box>
    今人不见古时月，今月曾经照古人。
</mt-box>


<!-- 容器翻转 -->
<mt-box flip="true">
    今人不见古时月，今月曾经照古人。
</mt-box>


<!-- 内容居中 -->
<mt-box center="true">
    今人不见古时月，今月曾经照古人。
</mt-box>


<!-- 显示上下边框 -->
<mt-box border="true">
    今人不见古时月，今月曾经照古人。
</mt-box>


<!-- 自定义参数 -->
<mt-box :config="boxConfig">
    今人不见古时月，今月曾经照古人。
</mt-box>
```

```javascript
export default {
    data() {
        return {
            boxConfig: {
                radius: "20rpx",
                padding: "40rpx",
                bg: "#EF6D6D",
                fontsize: "34rpx",
                color: "#fff"
            },
        }
    }
}
```

# Props

| 参数   | 默认值 | 类型            | 说明             | 可选值 | 是否必要 |
| ------ | ------ | --------------- | ---------------- | ------ |------ |
| flip   | false  | `Boolean` `String` | 是否翻转         | -      | false |
| center | false  | `Boolean` `String` | 内容是否居中     | -      |false |
| border | false  | `Boolean` `String` | 是否显示上下边框 | -      |false |
| config | `{}`     | `Object`          | 自定义参数       | -       |false |

### config 说明

| 参数     | 默认值 | 类型   | 说明          | 可选值 |
| -------- | ------ | ------ | ------------- |-----|
| radius   | 10rpx  | `String` | 盒子的圆角    | -   |
| padding  | 30rpx  | `String` | 盒子的padding | -   |
| bg       | #fff   | `String` | 盒子的背景色  | -   |
| fontsize | 30rpx  | `String` | 字体大小      | -   |
| color    | #333   | `String` | 字体颜色      | -   |

# Slots

| 插槽名 | 默认值 | 说明 |
| ------ | ------ | ---- |
| -      | -      | 盒子内容     |


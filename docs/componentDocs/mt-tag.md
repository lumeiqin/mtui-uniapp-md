# Tag
***
#

[//]: # (<iframe width='375px' height='667px' frameborder=0 allowfullscreen="true" src="https://static-363fc8f1-c547-4a87-8d04-6d5ba4035deb.bspapp.com/#/pages/tag"></iframe>)

[查看案例](https://static-363fc8f1-c547-4a87-8d04-6d5ba4035deb.bspapp.com/#/pages/base/tag)

```html
<!-- 基础用法 -->
<mt-tag>标签1</mt-tag>


<!-- 自定义参数 -->
<mt-tag :config="tagConfig">标签2</mt-tag>
```

```javascript
export default {
    data() {
        return {
            tagConfig: {
                color: "#2194F2",
                border: "1px solid #2194F2",
                padding: "10rpx 30rpx",
                radius: "30rpx",
                bg: "#fff",
                scale: "1.2"
            },
        }
    }
}
```

# Props

| 参数   | 默认值 | 类型   | 说明       | 可选值 | 是否必填 |
| ------ | ------ | ------ | ---------- | ------ | -------- |
| config | `{}`     | `Object` | 自定义参数 | -      | false         |

### config 说明

| 参数       | 默认值            | 类型   | 说明           | 可选值 |
| ---------- | ----------------- | ------ | -------------- | ------ |
| color      | `#333`              | `String` | 标签字体颜色   | -      |
| size       | 24rpx             | `String` | 标签字体大小   | -      |
| lineHeight | 24rpx             | `String` | 标签字体的行高 | -       |
| border     | `1px solid #CCC9C9` | `String` | 标签边框       | -      |
| padding    | `6rpx 10rpx`           | `String` | 标签的padding  | -      |
| bg         | `#CCC9C9`           | `String` | 标签背景       | -      |
| radius     | 20rpx             | `String` | 标签圆角       | -      |
| scale      | 1                 | `Number` | 标签缩放级别   | -      |

# Slots

| 插槽名 | 默认值 | 说明 |
| ------ | ------ | ---- |
| -      | -      | 标签内容     |

# Events

| 事件  | 说明           | 回调参数 |
| ----- | -------------- | -------- |
| click | 点击标签时触发 | -         |



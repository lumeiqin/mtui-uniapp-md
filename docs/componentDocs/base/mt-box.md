# Box

***

#    

[查看案例](https://static-363fc8f1-c547-4a87-8d04-6d5ba4035deb.bspapp.com/#/pages/base/box)

```html
<!-- 基础用法 -->
<mt-box>
    今人不见古时月，今月曾经照古人。
</mt-box>


<!-- 内容居中 + 显示上下边框 -->
<mt-box :center="true" :border="true">
    今人不见古时月，今月曾经照古人。
</mt-box>


<!-- 无数据状态 -->
<mt-box :empty="true">
    今人不见古时月，今月曾经照古人。
</mt-box>


<!-- 上拉加载 -->
<mt-box :config="pageConfig" @lower="lowerEvent" @upper="upperEvent">
    今人不见古时月，今月曾经照古人。<br>
    今人不见古时月，今月曾经照古人。<br>
    今人不见古时月，今月曾经照古人。<br>
    今人不见古时月，今月曾经照古人。<br>
    今人不见古时月，今月曾经照古人。<br>
    今人不见古时月，今月曾经照古人。<br>
    今人不见古时月，今月曾经照古人。<br>
    今人不见古时月，今月曾经照古人。<br>
    今人不见古时月，今月曾经照古人。<br>
    今人不见古时月，今月曾经照古人。<br>
    今人不见古时月，今月曾经照古人。<br>
    今人不见古时月，今月曾经照古人。<br>
    今人不见古时月，今月曾经照古人。<br>
    今人不见古时月，今月曾经照古人。<br>
    今人不见古时月，今月曾经照古人。<br>
    今人不见古时月，今月曾经照古人。<br>
    今人不见古时月，今月曾经照古人。<br>
    今人不见古时月，今月曾经照古人。<br>
    今人不见古时月，今月曾经照古人。<br>
    今人不见古时月，今月曾经照古人。<br>
    今人不见古时月，今月曾经照古人。<br>
    今人不见古时月，今月曾经照古人。<br>
    今人不见古时月，今月曾经照古人。<br>
    今人不见古时月，今月曾经照古人。<br>
</mt-box>
```

```javascript
export default {
    data() {
        return {
            pageConfig: {
                padding: "30rpx",
                scrollY: true,
                height: "400rpx",
                scrollTop: 50
            }
        }
    },
    methods: {
        upperEvent(e) {
            uni.showToast({
                title: "到顶啦",
                icon: "none"
            })
        },
        lowerEvent(e) {
            uni.showToast({
                title: "到底啦",
                icon: "none"
            })
        }
    }
}
```

# Props

| 参数   | 默认值 | 类型            | 说明        | 可选值 | 是否必要 |
| ------ | ------ | --------------- |-----------| ------ |------ |
| center | false  | `Boolean` | 内容是否居中    | -      |false |
| border | false  | `Boolean` | 是否显示上下边框  | -      |false |
| empty   | false  | `Boolean` | 是否显示无数据状态 | -      | false |
| config | `{}`     | `Object`          | 自定义参数     | -       |false |

### config 说明

| 参数     | 默认值   | 类型        | 说明                       | 可选值 |
| -------- |-------|-----------|--------------------------|-----|
| height       | auto  | `String`  | 盒子的高度                    | -   |
| radius   | 10rpx | `String`  | 盒子的圆角                    | -   |
| padding  | 30rpx | `String`  | 盒子的padding               | -   |
| bg       | #fff  | `String`  | 盒子的背景色                   | -   |
| scrollY | false | `Boolean` | 允许纵向滚动                   | -   |
| upper    | 50    | `Number`  | 距顶部多远时（单位px），触发 upper 事件 | -   |
| lower    | 50    | `Number`  | 距底部多远时（单位px），触发 lower 事件 | -   |
| scrollTop    | 0     | `Number`  | 设置竖向滚动条位置 | -   |

# Slots

| 插槽名 | 默认值 | 说明 |
| ------ | ------ | ---- |
| -      | -      | 盒子内容     |


# Events

| 事件  | 说明       | 回调参数 |
| ----- |----------|------|
| scroll | 滚动时触发  | `event` |
| upper | 滚动到顶部时触发 | `event`     |
| lower | 滚动到底部时触发 | `event`    |

# Rate
***
#

[//]: # (<iframe width='375px' height='667px' frameborder=0 allowfullscreen="true" src="https://static-363fc8f1-c547-4a87-8d04-6d5ba4035deb.bspapp.com/#/pages/rate"></iframe>)

[查看案例](https://static-363fc8f1-c547-4a87-8d04-6d5ba4035deb.bspapp.com/#/pages/base/rate)

```html
<!-- 基础用法 -->
<mt-rate :value="3" @change="rateChange"></mt-rate>


<!-- 调整星星数量 -->
<mt-rate :value="3" :count="8"></mt-rate>


<!-- 只读模式 -->
<mt-rate :value="3" readonly="true"></mt-rate>


<!-- 自定义icon -->
<mt-rate :value="3" icon="icon-gougou"></mt-rate>


<!-- 调整尺寸距离 -->
<mt-rate :value="3" size="60rpx" margin="30rpx"></mt-rate>
```

```javascript
export default {
    methods: {
        rateChange(value) {
            console.log("当前value为：" + value)
        }
    }
}
```

# Props

| 参数     | 默认值        | 类型               | 说明               | 可选值 | 是否必填 |
| -------- | ------------- |------------------| ------------------ | ------ | -------- |
| value    | 0             | `Number`         | 当前的值           | -      | true     |
| count    | 5             | `Number`         | 星星数量           | -      | false    |
| icon     | icon-xingxing | `String`         | 字体图标类型       | -      | false    |
| size     | 40rpx         | `String`         | 星星大小           | -      | false    |
| margin   | 20rpx         | `String`         | 星星之间的间隔距离 | -      | false    |
| readonly | false         | `Boolean` `String` | 是否只读           | -      | false    |

# Events

| 事件   | 说明           | 回调参数 |
| ------ | -------------- | -------- |
| change | 改变数值时触发 | `value`    |



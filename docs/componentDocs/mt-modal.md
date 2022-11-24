# Modal
***
#

[//]: # (<iframe width='375px' height='667px' frameborder=0 allowfullscreen="true" src="https://static-363fc8f1-c547-4a87-8d04-6d5ba4035deb.bspapp.com/#/pages/modal"></iframe>)

[查看案例](https://static-363fc8f1-c547-4a87-8d04-6d5ba4035deb.bspapp.com/#/pages/modal)

```html
<!-- 基础用法 -->
<mt-modal ref="one"></mt-modal>
<mt-button @click="openModal('one')">基础用法</mt-button>


<!-- 显示取消按钮 -->
<mt-modal ref="two" :showCancel="true"></mt-modal>
<mt-button @click="openModal('two')">显示取消按钮</mt-button>


<!-- 自定义内容 -->
<mt-modal ref="three" title="">
    <template slot="content">
        <view style="padding: 30rpx;">自定义内容</view>
    </template>
</mt-modal>
<mt-button @click="openModal('three')">自定义内容</mt-button>


<!-- 自定义参数 -->
<mt-modal ref="four" :config="modalConfig"></mt-modal>
<mt-button @click="openModal('four')">自定义参数</mt-button>

```

```javascript
export default {
    data() {
        return {
            modalConfig: {
                align: "center"
            }
        }
    },
    methods: {
        openModal(type) {
            this.$refs[type].open()
        }
    }
}
```

# Props

| 参数          | 默认值     | 类型                 | 说明                      | 可选值 | 是否必填  |
|-------------|---------|--------------------|-------------------------|-----|-------|
| title       | 标题      | `String`           | 提示的标题                   | -   | true  |
| content     | 这里是正文内容 | `String`           | 提示的内容                   | -   | true  |
| cancelText  | 取消      | `String`           | 取消按钮的文字                 | -   | false |
| confirmText | 确定      | `String`           | 确定按钮的文字                 | -   | false |
| showCancel  | false   | `Boolean` `String` | 是否显示取消按钮                | -   | false |
| diyEvent    | false   | `Boolean`          | `点击确定按钮只调用自定义confirm方法` | -   | false |
| config      | `{}`      | `Object`           | 自定义参数                   | -   | false |

### config 说明

| 参数         | 默认值  | 类型   | 说明                              | 可选值 |
| ------------ | ------- | ------ | --------------------------------- | ------ |
| confirmColor | `#2194F2` | `String` | 确定按钮的文字颜色                | -      |
| cancelColor  | `#333333` | `String` | 取消按钮的文字颜色                | -      |
| align        | left    | `String` | 提示的内容文字位置，`参考textAlign` | -      |

# Slots

| 插槽名  | 默认值 | 说明           |
| ------- | ------ | -------------- |
| title   | 标题   | 模态框头部     |
| content | 内容   | 模态框主要内容 |
|  footer       |   按钮     |   模态框底部             |

# Events

| 事件    | 说明               | 回调参数 |
| ------- | ------------------ | -------- |
| confirm | 点击确认按钮时触发 | -        |
| cancel  | 点击取消按钮时触发 | -         |



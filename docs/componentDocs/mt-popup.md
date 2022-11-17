# Popup
***
#

[//]: # (<iframe width='375px' height='667px' frameborder=0 allowfullscreen="true" src="https://static-363fc8f1-c547-4a87-8d04-6d5ba4035deb.bspapp.com/#/pages/popup"></iframe>)

```html

<mt-popup ref="popup">
    <view style="width: 100%;height: 200px;background: #fff;">
        这是模态框
    </view>
</mt-popup>

<mt-button @click="openModal">显示模态框</mt-button>
```

```javascript
export default {
    methods: {
        openModal() {
            this.$refs.popup.open()
        }
    }
} 
```

# Props

| 参数        | 默认值 | 类型                 | 说明             | 可选值                     | 是否必填 |
| ----------- | ------ |--------------------| ---------------- |-------------------------| -------- |
| show        | false  | `Boolean` `String` | 模态框的显示隐藏 | -                       | false    |
| type        | bottom | `String`           | 模态框的位置     | `top` `center` `bottom` | false    |
| isMaskClick | true   | `Boolean` `String` | 是否点击蒙版关闭模态框 | -                       | false         |


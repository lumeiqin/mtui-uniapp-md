# Popup

---

#

[查看案例](https://env-00jxgns8zjjt-static.normal.cloudstatic.cn/index.html#/pages/popup/popup)

```html
<!-- 基础用法 -->
<mt-popup ref="popup">
  <view style="width: 100%;height: 200px;background: #fff;"> bottom </view>
</mt-popup>
<mt-button @click="openModal('popup')">显示底部模态框</mt-button>

<!-- type: center -->
<mt-popup ref="popup1" type="center">
  <view style="width: 100%;height: 200px;background: #fff;"> center </view>
</mt-popup>
<mt-button @click="openModal('popup1')">显示中间模态框</mt-button>

<!-- type: top -->
<mt-popup ref="popup2" type="top">
  <view style="width: 100%;height: 200px;background: #fff;"> center </view>
</mt-popup>
<mt-button @click="openModal('popup2')">显示顶部模态框</mt-button>
```

```javascript
export default {
  methods: {
    openModal(type) {
      this.$refs[type].open();
    },
  },
};
```

# Props

| 参数        | 默认值 | 类型               | 说明                                              | 可选值                  | 是否必填 |
| ----------- | ------ | ------------------ | ------------------------------------------------- | ----------------------- | -------- |
| show        | false  | `Boolean` `String` | 模态框的显示隐藏                                  | -                       | false    |
| type        | bottom | `String`           | 模态框的位置                                      | `top` `center` `bottom` | false    |
| showMask    | true   | `Boolean` `String` | 是否显示蒙版                                      | -                       | false    |
| isMaskClick | true   | `Boolean` `String` | 是否点击蒙版关闭模态框 / 是否点击空白处关闭模态框 | -                       | false    |

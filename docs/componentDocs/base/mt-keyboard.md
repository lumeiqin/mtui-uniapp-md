# Keyboard

***

#     

[查看案例](https://static-363fc8f1-c547-4a87-8d04-6d5ba4035deb.bspapp.com/#/pages/base/keyboard)

```html
<!-- 基础用法 -->
<mt-search disabled
           :value="searchValue"
           :config="searchConfig"

           @click="openBoard"></mt-search>


<mt-keyboard ref="keyboard" show="true" @change="changeEvent"></mt-keyboard>
```

```javascript
export default {
    data() {
        return {
            searchConfig: {
                showClear: false,
                background: '#fff'
            },
            searchValue: "",
            show: true
        }
    },
    methods: {
        changeEvent(value) {
            this.searchValue = value
        },
        openBoard() {
            this.$refs.keyboard.open()
        },
    }
}
```

# Props

| 参数    | 默认值       | 类型                 | 说明   | 可选值 | 是否必要  |
|-------|-----------|--------------------|------| ------ |-------|
| color | `#2194F2` | `String`           | 主题色  | -      | false |
| show  | false     | `Boolean` `String` | 显示键盘 | -      | false |

# Events

| 事件   | 说明         | 回调参数 |
| ------ | ------------ | -------- |
| change | 点击按钮时触发 | `value`    |

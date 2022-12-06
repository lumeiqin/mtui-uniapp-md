# Pagination

***

#   

[查看案例](https://static-363fc8f1-c547-4a87-8d04-6d5ba4035deb.bspapp.com/#/pages/base/pagination)

```html
<!-- 基础用法 -->
<mt-pagination :totalPage="totalPage" @change="changeEvent"></mt-pagination>


<!-- 不显示… -->
<mt-pagination :showEll="false"></mt-pagination>


<!-- 变换主题色 -->
<mt-pagination :config="{color: '#6A59B1'}"></mt-pagination>
```

```javascript
export default {
    data() {
        return {
            totalPage: 20
        }
    },
    methods: {
        changeEvent(page) {
            uni.showToast({
                title: "当前页码为：" + page,
                icon: "none"
            })
        }
    }
}
```

# Props

| 参数   | 默认值  | 类型                | 说明      | 可选值 | 是否必要  |
| ------ |------|-------------------|---------| ------ |-------|
| totalPage   | 10   | `Number`  | 总页数     | -      | true  |
| showEll | true | `Boolean` | 是否显示省略号 | -      | false |
| config | `{}` | `Object`          | 自定义参数   | -       | false |

### config 说明

| 参数     | 默认值 | 类型   | 说明 | 可选值 |
| -------- | ------ | ------ |--|-----|
| color    | `#2194F2`   | `String` | 主题色 | -   |


# Events

| 事件  | 说明 | 回调参数 |
| ----- |--| -------- |
| change | 改变页码时触发 | -         |

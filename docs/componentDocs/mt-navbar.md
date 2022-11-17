# Navbar
***
#

[//]: # (<iframe width='375px' height='667px' frameborder=0 allowfullscreen="true" src="https://static-363fc8f1-c547-4a87-8d04-6d5ba4035deb.bspapp.com/#/pages/navbar"></iframe>)

```html
<!-- 基础用法 -->
<mt-navbar title="基础用法"></mt-navbar>


<!-- 右侧插槽 -->
<mt-navbar title="右侧插槽">
    <template slot="right">新增</template>
</mt-navbar>


<!-- 触发自定义方法 -->
<mt-navbar title="触发自定义方法" emit="true" @backClick="navbarEvent"></mt-navbar>


<!-- 自定义参数 -->
<mt-navbar title="自定义参数" :config="navbarConfig"></mt-navbar>
```

```javascript
export default {
    data() {
        return {
            navbarConfig: {
                bg: "#EF6D6D",
                back: false,
            },
        }
    },
    methods: {
        navbarEvent() {
            console.log("触发自定义方法")
        }
    }
}
```

# Props

| 参数  | 默认值  | 类型                 | 说明             | 可选值 |是否必要|
| ----- | ------- |--------------------| ---------------- | ------ | ------ |
| fixed | false   | `Boolean` `String` | 是否固定在顶部   | -      | false        |
| emit  | false   | `Boolean` `String` | 是否触发自定义方法   | -      | false        |
| title | -    | `String`           | 标题       | -      | false        |
| config   | `{}`      | `Object`           | 自定义参数        | -                | false|

### config 说明

| 参数 | 默认值 | 类型 | 说明 | 可选值 |
| ---- | ------ | ---- | ---- | ------ |
| nobg  | false   | `Boolean` | 是否无背景          | -      |   
| bg    | #2194F2 | `String`  | 背景                | -      |  
| back  | true    | `Boolean` | 是否显示返回箭头    | -      |    
| color | #333    | `String`  | `nobg=true：标题颜色` | -      |   

# Slots

| 插槽名 | 默认值                     | 说明         |
| ------ | -------------------------- | ------------ |
| left   | `config.back=true：返回箭头` | navbar左侧   |
| middle | 标题                       | navbar标题区 |
| right  | -                          | navbar右侧             |

# Events

| 事件  | 说明           | 回调参数 |
| ----- | -------------- | -------- |
| backClick | `emit=true：点击返回键时触发` | -         |



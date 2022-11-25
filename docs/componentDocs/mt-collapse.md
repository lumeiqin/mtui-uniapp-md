# Collapse

***

#      

[查看案例](https://static-363fc8f1-c547-4a87-8d04-6d5ba4035deb.bspapp.com/#/pages/collapse)

```html
<!-- 基础用法 -->
<mt-collapse title="基础用法">今人不见古时月，今月曾经照古人。</mt-collapse>
<mt-collapse title="基础用法" open>今人不见古时月，今月曾经照古人。</mt-collapse>


<!-- 禁用面板 -->
<mt-collapse title="禁用面板 - 关闭状态" disabled>今人不见古时月，今月曾经照古人。</mt-collapse>
<mt-collapse title="禁用面板 - 打开状态" disabled open>今人不见古时月，今月曾经照古人。</mt-collapse>


<!-- 自定义参数 -->
<mt-collapse title="自定义参数" :config="collapseConfig">今人不见古时月，今月曾经照古人。</mt-collapse>
```

```javascript
export default {
    data() {
        return {
            collapseConfig: {
                bg: "#b7c8da", // 盒子的背景
                height: "56px", // 标题盒子的height
                padding: "0 10px", // 标题盒子的padding
                fontSize: "18px", // 标题盒子的字体大小
                radius: "8px 8px 0 0", // 盒子的圆角
                arrow: false, // 是否显示右箭头
                titleBorder: true, // 标题盒子的底边框
                thumb: "https://ts1.cn.mm.bing.net/th?id=OIP-C.4t6CKFcRe9zK8Kgw2uIAWwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
                thumbSize: "30px" // 图片尺寸
            }
        }
    }
}
```

# Props

| 参数     | 默认值 | 类型               | 说明       | 可选值 | 是否必要 |
| -------- | ------ | ------------------ | ---------- | ------ | -------- |
| open     | false  | `Boolean` `String` | 是否展开   | -      | false    |
| disabled | false  | `Boolean` `String` | 是否禁用   | -      | false    |
| title    | -      | `String`           | 标题文字       | -      | true    |
| config   | `{}`   | `Object`           | 自定义参数 | -      | false    |

### config 说明

| 参数        | 默认值                                                                                      | 类型        | 说明               | 可选值 |
| ----------- | ------------------------------------------------------------------------------------------- |-----------| ---------------- | ------ |
| bg          | `#fff`                                                                                        | `String`  | 盒子的背景色   | -      |
| height      | 48px                                                                                        | `String`  | 标题盒子的高度     | -      |
| padding     | `0 12px`                                                                                      | `String`  | 标题盒子的padding  | -      |
| fontSize    | 15px                                                                                        | `String`  | 标题盒子的字体大小 | -      |
| radius      | `4px 4px 0 0`                                                                                 | `String`  | 盒子的圆角         | -      |
| arrow       | true                                                                                        | `Boolean` | 是否显示箭头       | -      |
| titleBorder | false                                                                                       | `Boolean` | 标题盒子的下边框   | -      |
| thumb       | "" | `String`    | 标题左侧缩略图                 | false  |
| thumbSize   | 20px                                                                                        | `String`    | 标题左侧缩略图的宽高                 | false       |

# Slots

| 插槽名 | 默认值 | 说明 |
| ------ | ------ | ---- |
| -      | -      | 盒子内容     |


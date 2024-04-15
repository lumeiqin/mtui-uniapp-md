# Tabs

---

#

[查看案例](https://env-00jxgns8zjjt-static.normal.cloudstatic.cn/index.html#/pages/base/tabs)

```html
<!-- 基础用法 -->
<mt-tabs></mt-tabs>

<!-- 无限制模式 -->
<mt-tabs type="scroll" :tabData="scrollTabData"></mt-tabs>

<!-- 自定义参数 -->
<mt-tabs :config="tabConfig"></mt-tabs>
```

```javascript
export default {
  data() {
    return {
      scrollTabData: [
        {
          id: 0,
          title: "生产监控",
        },
        {
          id: 1,
          title: "装置负荷",
        },
        {
          id: 2,
          title: "库存分析",
        },
        {
          id: 3,
          title: "发货分析",
        },
        {
          id: 4,
          title: "原材料",
        },
        {
          id: 5,
          title: "生产计划",
        },
      ],
      tabConfig: {
        bg: "#2194F2",
        color: "#e4e4e4",
        selectedSize: "18px",
        selectedColor: "#f6f6f6",
        selectedWeight: 900,
        underline: false,
      },
    };
  },
};
```

# Props

| 参数        | 默认值                                                 | 类型     | 说明                                                                | 可选值             | 是否必填 |
| ----------- | ------------------------------------------------------ | -------- | ------------------------------------------------------------------- | ------------------ | -------- |
| type        | default                                                | `String` | tab 类型                                                            | `scroll` `default` | false    |
| activeIndex | 0                                                      | `Number` | 当前选中的 tab                                                      | -                  | false    |
| showValue   | `{value: "title", key: "id"}`                          | `Object` | 当 tabData 数组的每项为`string`，即通过此参数将字符串转换成`object` | -                  | false    |
| tabData     | `[{id: 0,title: "未审核",},{id: 1,title: "审核通过"}]` | `Array`  | tab 数据                                                            | -                  | true     |
| config      | `{}`                                                   | `Object` | 自定义参数                                                          | -                  | false    |

### config 说明

| 参数           | 默认值              | 类型      | 说明               | 可选值 |
| -------------- | ------------------- | --------- | ------------------ | ------ |
| border         | `1px solid #e4e4e4` | `String`  | tab 的下边框       | -      |
| color          | `#333`              | `String`  | tab 未选中字体颜色 | -      |
| selectedColor  | `#2194F2`           | `String`  | tab 已选中字体颜色 |        |
| fontsize       | 30rpx               | `String`  | 未选中字体大小     | -      |
| selectedSize   | 30rpx               | `String`  | 已选中字体大小     | -      |
| underline      | true                | `Boolean` | 是否显示下划线     | -      |
| selectedWeight | 600                 | `Number`  | 已选中字体粗细     | -      |
| bg             | `#fff`              | `String`  | tab 背景色         | -      |
| height         | 90rpx               | `String`  | tab 的高度         | -      |

# Events

| 事件  | 说明          | 回调参数                                   |
| ----- | ------------- | ------------------------------------------ |
| click | 点击 tab 触发 | `item：当前tab相关` `index：当前tab的索引` |

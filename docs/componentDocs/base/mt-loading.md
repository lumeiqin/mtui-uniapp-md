# Loading

---

#

[查看案例](https://env-00jxgns8zjjt-static.normal.cloudstatic.cn/index.html#/pages/base/loading)

```html
<!-- 基础用法 -->
<mt-loading>加载中…</mt-loading>

<!-- 点 loading -->
<mt-loading type="dot"></mt-loading>

<!-- 线 loading -->
<mt-loading type="line"></mt-loading>

<!-- 自定义参数 -->
<mt-loading :config="loadConfig">
  <text style="color: #2194F2">加载中…</text>
</mt-loading>
```

```javascript
export default {
  data() {
    return {
      loadConfig: {
        color: "#2194F2",
        fontSize: "30px",
        marginRight: "18rpx",
      },
    };
  },
};
```

# Props

| 参数   | 默认值 | 类型     | 说明         | 可选值                | 是否必填 |
| ------ | ------ | -------- | ------------ | --------------------- | -------- |
| type   | normal | `String` | loading 类型 | `normal` `dot` `line` | false    |
| config | `{}`   | `Object` | 自定义参数   | -                     | false    |

### config 说明

| 参数        | 默认值    | 类型     | 说明                      | 可选值 |
| ----------- | --------- | -------- | ------------------------- | ------ |
| color       | `#424242` | `String` | loading 颜色              | -      |
| fontSize    | 28px      | `String` | loading 尺寸              | -      |
| marginRight | 16rpx     | `String` | loading 与 字体之间的距离 | -      |

# Slots

| 插槽名 | 默认值 | 说明             |
| ------ | ------ | ---------------- |
| -      | -      | loading 后的内容 |

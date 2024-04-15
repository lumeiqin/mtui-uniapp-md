# Pagination

---

#

[查看案例](https://env-00jxgns8zjjt-static.normal.cloudstatic.cn/index.html#/pages/base/pagination)

```html
<!-- 基础用法 -->
<mt-pagination :totalPage="totalPage" @change="changeEvent"></mt-pagination>

<!-- 不显示… -->
<mt-pagination :showEll="false"></mt-pagination>

<!-- 简单模式 -->
<mt-pagination type="simple" :showEll="false"></mt-pagination>

<!-- 自定义参数 -->
<mt-pagination :index="2" :config="pageConfig"></mt-pagination>
```

```javascript
export default {
  data() {
    return {
      totalPage: 20,
      pageConfig: {
        color: "#6A59B1",
        radius: "10rpx",
        numRadius: "8rpx",
      },
    };
  },
  methods: {
    changeEvent(page) {
      uni.showToast({
        title: "当前页码为：" + page,
        icon: "none",
      });
    },
  },
};
```

# Props

| 参数      | 默认值 | 类型      | 说明           | 可选值            | 是否必要 |
| --------- | ------ | --------- | -------------- | ----------------- | -------- |
| totalPage | 10     | `Number`  | 总页数         | -                 | true     |
| index     | 1      | `Number`  | 当前页数       | -                 | true     |
| type      | normal | `String`  | 分页类型       | `normal` `simple` | false    |
| showEll   | true   | `Boolean` | 是否显示省略号 | -                 | false    |
| config    | `{}`   | `Object`  | 自定义参数     | -                 | false    |

### config 说明

| 参数      | 默认值    | 类型     | 说明                              | 可选值 |
| --------- | --------- | -------- | --------------------------------- | ------ |
| color     | `#2194F2` | `String` | 主题色                            | -      |
| radius    | 30rpx     | `String` | 按钮圆角，参考`border-radius`     | -      |
| numRadius | 50%       | `String` | 数字按钮圆角，参考`border-radius` | -      |

# Events

| 事件   | 说明           | 回调参数 |
| ------ | -------------- | -------- |
| change | 改变页码时触发 | -        |

# 联动面板选择

---

#

[查看案例](https://env-00jxgns8zjjt-static.normal.cloudstatic.cn/index.html#/pages/popup/simpleMultiCustom)

```html
<!-- 基础用法 -->
<mt-button @click="openSelector('normal')">基础使用</mt-button>

<simpleMultiCustom
  ref="normal"
  :search="false"
  :title="title"
  :options="options"
  :showValueDefault="showValueDefault"
  @submit="submitEvent"
  @cancel="cancelEvent"
></simpleMultiCustom>

<!-- 显示搜索框 -->
<mt-button @click="openSelector('search')">显示搜索框</mt-button>

<simpleMultiCustom
  ref="search"
  :search="true"
  :title="title"
  :options="options"
  :showValueDefault="showValueDefault"
  @submit="submitEvent"
  @cancel="cancelEvent"
  @customSearch="searchEvent"
></simpleMultiCustom>

<!-- 当输入关键字后 内容自定义 -->
<mt-button @click="openSelector('diy')">当输入关键字后 内容自定义</mt-button>

<simpleMultiCustom
  ref="diy"
  :search="true"
  :title="title"
  :options="options"
  :showValueDefault="showValueDefault"
  @submit="submitEvent"
  @cancel="cancelEvent"
  @customSearch="searchEvent"
>
  我是自定义内容
</simpleMultiCustom>
```

```javascript
// 除第一种引入方式，其他引入方式需要手动引入此组件
import simpleMultiCustom from "../../components/mt-form/item-multiCustom/simple-multi-custom.vue";

export default {
  components: {
    simpleMultiCustom,
  },
};
```

```javascript
export default {
  data() {
    return {
      title: "选择对应选项",
      options: [
        {
          key: "key",
          value: "value",
          id: 0,
          children: [
            {
              key: "key1",
              value: "value1",
              id: 1,
              children: [
                {
                  key: "key2",
                  value: "value2",
                  id: 2,
                  children: [{ key: "key5", value: "value5", id: 5 }],
                },
              ],
            },
            {
              key: "key3",
              value: "value3",
              id: 3,
              children: [{ key: "key4", value: "value4", id: 2 }],
            },
          ],
        },
      ],
      showValueDefault: { key: "key", value: "value" },
    };
  },
  methods: {
    openSelector(type) {
      this.$refs[type].open();
    },
    submitEvent(e) {
      uni.showToast({
        title: JSON.stringify(e),
        icon: "none",
      });
    },
    cancelEvent(e) {
      uni.showToast({
        title: "点击了取消按钮",
        icon: "none",
      });
    },
    searchEvent(e) {
      uni.showToast({
        title: JSON.stringify(e),
        icon: "none",
      });
    },
  },
};
```

# Props

| 参数             | 默认值                            | 类型                      | 说明                                                                    | 可选值 | 是否必填 |
| ---------------- | --------------------------------- | ------------------------- | ----------------------------------------------------------------------- | ------ | -------- |
| search           | false                             | `Boolean`                 | 是否显示搜索框                                                          | -      | false    |
| title            | ""                                | `String`                  | 面板标题                                                                | -      | false    |
| options          | -                                 | `Array` `Array＜Object＞` | 选择器选项                                                              | -      | false    |
| showValueDefault | { `key: "id"`, `value: "value"` } | `Object`                  | showValue 中 `value` 作为选择器显示内容，`key` 作为提交至后台的参数名字 | -      | false    |

# Slots

| 插槽名 | 默认值 | 说明                                   |
| ------ | ------ | -------------------------------------- |
| -      | -      | `search: true`: 用于自定义搜索结果内容 |

# Events

| 事件         | 说明               | 回调参数                                                                                                                                                                                    |
| ------------ | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| submit       | 点击确定按钮时触发 | {`firstCode:"key1"`,`key:['key1', 'key5', 'key5']`,`label:"value1-value5"`,`lastItem:{id:5,key:"key5",value:"value5"}`,`secondCode:"key5"`,`thirdCode:"key5"`,`value:['value1', 'value5']`} |
| cancel       | 点击取消按钮时触发 | -                                                                                                                                                                                           |
| customSearch | 搜索框输入时触发   | `value：搜索框内容`                                                                                                                                                                         |

# 多级联动选择器

---

#

[查看案例](https://env-00jxgns8zjjt-static.normal.cloudstatic.cn/index.html#/pages/popup/simpleMultiSelector)

```html
<!-- 基础用法 -->
<mt-button @click="openSelector('normal')">基础用法</mt-button>

<simpleMultiSelector
  ref="normal"
  :column="column"
  :options="options"
  :defaultPicker="defaultPicker"
  :showValueDefault="showValueDefault"
  @submit="submitEvent"
  @cancel="cancelEvent"
></simpleMultiSelector>
```

```javascript
// 除第一种引入方式，其他引入方式需要手动引入此组件
import simpleMultiSelector from "../../components/mt-form/item-multiSelector/simple-multi-selector.vue";

export default {
  components: {
    simpleMultiSelector,
  },
};
```

```javascript
export default {
  data() {
    return {
      column: 3,
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
      defaultPicker: [0, 0, 0],
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
  },
};
```

# Props

| 参数             | 默认值                            | 类型                      | 说明                                                                    | 可选值          | 是否必填 |
| ---------------- | --------------------------------- | ------------------------- | ----------------------------------------------------------------------- | --------------- | -------- |
| column           | 2                                 | `Number`                  | 表示选择器的粒度                                                        | `2` `3` `4` `5` | false    |
| options          | -                                 | `Array` `Array＜Object＞` | 选择器选项                                                              | -               | false    |
| defaultPicker    | `[0,0,0,0,0]`                     | `Array`                   | 初始显示值                                                              | -               | false    |
| showValueDefault | { `key: "id"`, `value: "value"` } | `Object`                  | showValue 中 `value` 作为选择器显示内容，`key` 作为提交至后台的参数名字 | -               | false    |

# Events

| 事件   | 说明               | 回调参数                                                                                                                                                                                                     |
| ------ | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| submit | 点击确定按钮时触发 | {`firstCode:"key1"`,`key:['key1', 'key2', 'key5']`,`label:"value1-value2-value5"`,`lastItem:{id:5,key:"key5",value:"value5"}`,`secondCode:"key2"`,`thirdCode:"key5"`,`value:['value1', 'value2', 'value5']`} |
| cancel | 点击取消按钮时触发 | -                                                                                                                                                                                                            |

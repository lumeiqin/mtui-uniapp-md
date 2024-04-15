# 选择器

---

#

[查看案例](https://env-00jxgns8zjjt-static.normal.cloudstatic.cn/index.html#/pages/popup/simpleSelector)

```html
<!-- 基础用法 -->
<mt-button @click="openSelector('normal')">基础用法</mt-button>

<simpleSelector
  ref="normal"
  :options="options"
  :defaultPicker="defaultPicker"
  :showValueDefault="showValueDefault"
  @submit="submitEvent"
  @cancel="cancelEvent"
></simpleSelector>
```

```javascript
// 除第一种引入方式，其他引入方式需要手动引入此组件
import simpleSelector from "../../components/mt-form/item-selector/simple-selector.vue";

export default {
  components: {
    simpleSelector,
  },
};
```

```javascript
export default {
  data() {
    return {
      options: [
        { name: 0, desc: "第一个哦" },
        { name: 1, desc: "第二个哦" },
      ],
      defaultPicker: [1],
      showValueDefault: { key: "name", value: "desc" },
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

| 参数             | 默认值                            | 类型                      | 说明                                                                    | 可选值 | 是否必填 |
| ---------------- | --------------------------------- | ------------------------- | ----------------------------------------------------------------------- | ------ | -------- |
| options          | -                                 | `Array` `Array＜Object＞` | 选择器选项                                                              | -      | false    |
| defaultPicker    | `[0]`                             | `Array`                   | 初始显示值                                                              | -      | false    |
| showValueDefault | { `key: "id"`, `value: "value"` } | `Object`                  | showValue 中 `value` 作为选择器显示内容，`key` 作为提交至后台的参数名字 | -      | false    |

# Events

| 事件   | 说明               | 回调参数                                    |
| ------ | ------------------ | ------------------------------------------- |
| submit | 点击确定按钮时触发 | `{desc:"第一个哦",label:"第一个哦",name:0}` |
| cancel | 点击取消按钮时触发 | -                                           |

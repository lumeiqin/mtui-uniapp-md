# Selector 单选

---

#

[查看案例](https://env-00jxgns8zjjt-static.normal.cloudstatic.cn/index.html#/pages/form/selector)

```html
<!-- 自定义配置 -->
<mt-form :formData="selectorFormData" @change="changeSelector"></mt-form>
```

```javascript
export default {
  data() {
    return {
      selectorFormData: {
        field: {
          selector: "",
          selector1: "",
          "selector1-text": "",
        },
        property: [
          {
            type: "selector",
            validate: true,
            options: [
              { id: 0, value: "第一个哦" },
              { id: 1, value: "第二个哦" },
            ],
            getKey: "value",
            text: "政治面貌",
            value: "selector",
            placeholder: "请选择政治面貌",
            showValue: { key: "id", value: "value" },
          },
          {
            type: "selector",
            validate: true,
            styleType: "col",
            detailshow: true,
            options: [
              { name: 0, desc: "第一个哦" },
              { name: 1, desc: "第二个哦" },
            ],
            getKey: "key",
            text: "政治面貌",
            value: "selector1",
            placeholder: "请选择政治面貌",
            defaultPicker: [1],
            secondValue: "selector1-text",
            showValue: { key: "name", value: "desc" },
          },
        ],
      },
    };
  },
  methods: {
    changeSelector(item) {
      uni.showToast({
        title: "表单提交的结果：" + JSON.stringify(item),
        icon: "none",
      });
    },
  },
};
```

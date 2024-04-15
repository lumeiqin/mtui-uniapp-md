# Radio 单选

---

#

[查看案例](https://env-00jxgns8zjjt-static.normal.cloudstatic.cn/index.html#/pages/form/radio)

```html
<!-- 自定义配置 -->
<mt-form :formData="radioFormData"></mt-form>
```

```javascript
export default {
  data() {
    return {
      radioFormData: {
        field: {
          radio: "",
          radio1: "0",
          radio2: "是",
          radio3: "测试2",
        },
        property: [
          {
            type: "radio",
            validate: true,
            options: [
              { id: "0", value: "是" },
              { id: "1", value: "否" },
            ],
            getKey: "key",
            text: "是否必填",
            value: "radio",
            showValue: { key: "id", value: "value" },
          },
          {
            type: "radio",
            validate: true,
            only: true,
            styleType: "col",
            options: [
              { title: "0", content: "测试1" },
              { title: "1", content: "测试2" },
            ],
            getKey: "key",
            text: "是否必填",
            value: "radio1",
            showValue: { key: "title", value: "content" },
            valueShow: "0",
          },
          {
            type: "radio",
            validate: true,
            only: true,
            options: [
              { id: "0", value: "是" },
              { id: "1", value: "否" },
            ],
            getKey: "value",
            text: "是否必填",
            value: "radio2",
            color: "red",
            showValue: { key: "id", value: "value" },
            valueShow: "是",
          },
          {
            type: "radio",
            disabled: true,
            options: [
              { id: "0", value: "测试1" },
              { id: "1", value: "测试2" },
            ],
            getKey: "value",
            text: "是否必填",
            value: "radio3",
            valueShow: "测试2",
            showValue: { key: "id", value: "value" },
          },
        ],
      },
    };
  },
};
```

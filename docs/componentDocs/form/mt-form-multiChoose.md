# MultiChoose 多选

---

#

[查看案例](https://env-00jxgns8zjjt-static.normal.cloudstatic.cn/index.html#/pages/form/multiChoose)

```html
<!-- 自定义配置 -->
<mt-form :formData="multiChooseFormData" @change="changeMultiChoose"></mt-form>
```

```javascript
export default {
  data() {
    return {
      multiChooseFormData: {
        field: {
          multiChoose: "",
          multiChoose1: "1",
          "multiChoose-text": "",
        },
        property: [
          {
            type: "multiChoose",
            validate: true,
            options: [
              { id: 0, value: "第一个哦" },
              { id: 1, value: "第二个哦" },
              { id: 2, value: "第三个哦" },
              { id: 3, value: "第四个哦" },
              { id: 4, value: "第五个哦" },
            ],
            getKey: "value",
            text: "处理建议",
            value: "multiChoose",
            placeholder: "请选择处理建议",
            showValue: { key: "id", value: "value" },
          },
          {
            type: "multiChoose",
            styleType: "col",
            options: [
              { name: 0, content: "第一个哦" },
              { name: 1, content: "第二个哦" },
              { name: 2, content: "第三个哦" },
              { name: 3, content: "第四个哦" },
              { name: 4, content: "第五个哦" },
            ],
            getKey: "key",
            text: "处理建议",
            value: "multiChoose1",
            placeholder: "请选择处理建议",
            valueShow: "",
            secondValue: "multiChoose-text",
            showValue: { key: "name", value: "content" },
          },
        ],
      },
    };
  },
  methods: {
    changeMultiChoose(item) {
      uni.showToast({
        title: "表单提交的结果：" + JSON.stringify(item),
        icon: "none",
      });
    },
  },
};
```

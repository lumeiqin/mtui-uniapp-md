# Number 数字

---

#

[查看案例](https://env-00jxgns8zjjt-static.normal.cloudstatic.cn/index.html#/pages/form/number)

```html
<!-- 自定义配置 -->
<mt-form :formData="numberFormData"></mt-form>
```

```javascript
export default {
  data() {
    return {
      numberFormData: {
        field: {
          number: "",
          number1: "2",
          number2: "2",
          number3: "",
          number4: "",
          number5: "",
        },
        property: [
          {
            type: "number",
            validate: true,
            text: "人数",
            value: "number",
            placeholder: "请输入人数",
          },
          {
            type: "number",
            disabled: true,
            text: "人数",
            value: "number1",
            valueShow: "2",
          },
          {
            type: "number",
            detailshow: true,
            text: "人数",
            value: "number2",
            valueShow: "2",
          },
          {
            type: "number",
            validate: true,
            styleType: "col",
            text: "人数",
            value: "number3",
            placeholder: "输入框占整行",
            valueShow: "",
          },
          {
            type: "number",
            validate: true,
            hide: true,
            text: "人数",
            value: "number4",
            placeholder: "不在表单中显示本项",
          },
          {
            type: "number",
            validate: true,
            only: true,
            text: "人数",
            value: "number5",
            placeholder: "必填项，不显示星号",
            icon: "https://ts1.cn.mm.bing.net/th?id=OIP-C.4t6CKFcRe9zK8Kgw2uIAWwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
            valueShow: "",
          },
        ],
      },
    };
  },
};
```

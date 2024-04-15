# Tel 手机号

---

#

[查看案例](https://env-00jxgns8zjjt-static.normal.cloudstatic.cn/index.html#/pages/form/tel)

```html
<!-- 自定义配置 -->
<mt-form :formData="telFormData"></mt-form>
```

```javascript
export default {
  data() {
    return {
      telFormData: {
        field: {
          tel: "",
          tel1: "",
          tel2: "此项有初始值，不可修改",
          tel3: "详情内容颜色为灰色，可用于详情模式",
          tel4: "",
          tel5: "",
        },
        property: [
          {
            type: "tel",
            validate: true,
            text: "联系方式",
            value: "tel",
            placeholder: "请输入手机号",
          },
          {
            type: "tel",
            validate: true,
            only: true,
            text: "联系方式",
            value: "tel1",
            icon: "https://ts1.cn.mm.bing.net/th?id=OIP-C.4t6CKFcRe9zK8Kgw2uIAWwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
            placeholder: "必填项，不显示星号",
            valueShow: "",
          },
          {
            type: "tel",
            disabled: true,
            text: "联系方式",
            value: "tel2",
            valueShow: "此项有初始值，不可修改",
          },
          {
            type: "tel",
            detailshow: true,
            text: "联系方式",
            value: "tel3",
            valueShow: "详情内容颜色为灰色，可用于详情模式",
          },
          {
            type: "tel",
            validate: true,
            styleType: "col",
            text: "联系方式",
            value: "tel4",
            placeholder: "输入框占整行",
            valueShow: "",
          },
          {
            type: "tel",
            hide: true,
            text: "联系方式",
            value: "tel5",
            placeholder: "不在表单中显示本项",
          },
        ],
      },
    };
  },
};
```

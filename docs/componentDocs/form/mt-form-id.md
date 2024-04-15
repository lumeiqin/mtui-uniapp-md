# ID 身份证

---

#

[查看案例](https://env-00jxgns8zjjt-static.normal.cloudstatic.cn/index.html#/pages/form/id)

```html
<!-- 自定义配置 -->
<mt-form :formData="idFormData" @toCamera="toCameraFun"></mt-form>
```

```javascript
export default {
  data() {
    return {
      idFormData: {
        field: {
          id: "",
          id1: "此项有初始值，不可修改",
          id2: "详情内容颜色为灰色，可用于详情模式",
          id3: "",
          id4: "",
          id5: "",
          id6: "",
          id7: "",
        },
        property: [
          {
            type: "ID",
            validate: true,
            text: "身份证号",
            value: "id",
            placeholder: "请输入身份证号",
          },
          {
            type: "ID",
            validate: true,
            disabled: true,
            text: "身份证号",
            value: "id1",
            valueShow: "此项有初始值，不可修改",
          },
          {
            type: "ID",
            validate: true,
            detailshow: true,
            text: "身份证号",
            value: "id2",
            valueShow: "详情内容颜色为灰色，可用于详情模式",
          },
          {
            type: "ID",
            text: "身份证号",
            value: "id3",
            icon: "https://ts1.cn.mm.bing.net/th?id=OIP-C.4t6CKFcRe9zK8Kgw2uIAWwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
          },
          {
            type: "ID",
            validate: true,
            only: true,
            text: "身份证号",
            value: "id4",
            placeholder: "必填项，不显示星号",
          },
          {
            type: "ID",
            styleType: "col",
            text: "身份证号",
            value: "id5",
            placeholder: "输入框占整行",
          },
          {
            type: "ID",
            hide: true,
            text: "身份证号",
            value: "id6",
            placeholder: "不在表单中显示本项",
          },
          {
            type: "ID",
            disabled: true,
            text: "身份证",
            value: "id7",
            placeholder: "禁用文本框",
          },
        ],
      },
    };
  },
  methods: {
    toCameraFun(item) {
      uni.showToast({
        title: "当前项的value值：" + item.value,
        icon: "none",
      });
    },
  },
};
```

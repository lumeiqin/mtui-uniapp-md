# Click 点击

---

#

[查看案例](https://env-00jxgns8zjjt-static.normal.cloudstatic.cn/index.html#/pages/form/click)

```html
<!-- 自定义配置 -->
<mt-form :formData="clickFormData" @clickEvent="clickFun"></mt-form>
```

```javascript
export default {
  data() {
    return {
      clickFormData: {
        field: {
          click: "",
          click1: "",
          click2: "详情内容颜色为灰色，可用于详情模式",
          click3: "",
          click4: "",
          click5: "",
        },
        property: [
          {
            type: "click",
            validate: true,
            text: "选择区划",
            value: "click",
            placeholder: "点击选择区划",
          },
          {
            type: "click",
            validate: true,
            only: true,
            text: "选择区划",
            value: "click1",
            placeholder: "必填项，不显示星号",
          },
          {
            type: "click",
            detailshow: true,
            text: "选择区划",
            value: "click2",
            valueShow: "详情内容颜色为灰色，可用于详情模式",
          },
          {
            type: "click",
            styleType: "col",
            text: "选择区划",
            value: "click3",
            placeholder: "输入框占整行",
          },
          {
            type: "click",
            text: "选择区划",
            value: "click4",
            icon: "https://ts1.cn.mm.bing.net/th?id=OIP-C.4t6CKFcRe9zK8Kgw2uIAWwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
          },
          {
            type: "click",
            disabled: true,
            text: "选择区划",
            value: "click5",
            placeholder: "禁用文本框，不触发点击事件",
          },
        ],
      },
    };
  },
  methods: {
    clickFun(item) {
      uni.showToast({
        title: "当前项的value值：" + item.value,
        icon: "none",
      });
    },
  },
};
```

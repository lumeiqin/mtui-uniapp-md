# MultiSelector 多级联动

---

#

[查看案例](https://env-00jxgns8zjjt-static.normal.cloudstatic.cn/index.html#/pages/form/multiSelector)

```html
<!-- 自定义配置 -->
<mt-form :formData="multiSelectorFormData" @change="changeSelector"></mt-form>
```

```javascript
export default {
  data() {
    return {
      multiSelectorFormData: {
        field: {
          multiSelector: "",
          "multiSelector-text": "",
          multiSelector1: "",
        },
        property: [
          {
            type: "multiSelector",
            validate: true,
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
            getKey: "key",
            text: "籍贯",
            value: "multiSelector",
            placeholder: "请选择籍贯",
            secondValue: "multiSelector-text",
            column: 3,
            defaultPicker: [0, 0, 0],
            showValue: { key: "id", value: "value" },
            valueShow: "",
          },
          {
            type: "multiSelector",
            validate: true,
            styleType: "col",
            detailshow: true,
            options: [
              {
                name: "key",
                desc: "value",
                id: 0,
                children: [
                  {
                    name: "key1",
                    desc: "value1",
                    id: 1,
                    children: [
                      {
                        name: "key2",
                        desc: "value2",
                        id: 2,
                        children: [{ name: "key5", desc: "value5", id: 5 }],
                      },
                    ],
                  },
                  {
                    name: "key3",
                    desc: "value3",
                    id: 3,
                    children: [{ name: "key4", desc: "value4", id: 2 }],
                  },
                ],
              },
            ],
            getKey: "value",
            text: "籍贯",
            value: "multiSelector1",
            placeholder: "请选择籍贯",
            column: 2,
            defaultPicker: [0, 0],
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

# MultiCustom 联动面板

---

#

[查看案例](https://env-00jxgns8zjjt-static.normal.cloudstatic.cn/index.html#/pages/form/multiCustom)

```html
<!-- 自定义配置 -->
<mt-form
  :formData="multiCustomFormData"
  @customSearch="customSearchFun"
></mt-form>
```

```javascript
export default {
  data() {
    return {
      multiCustomFormData: {
        field: {
          "multiCustom-text": "",
          multiCustom1: "防邪禁毒-防邪-防邪禁毒11-00011",
          multiCustom2: "",
        },
        property: [
          {
            type: "multiCustom",
            validate: true,
            options: [
              {
                menuFlag: true,
                value: "社会治安",
                parentId: "0",
                pidPath: "0-1410150291856904193",
                children: [
                  {
                    flowId: "1456458101518635008",
                    flowKey: "ywgz",
                    formId: null,
                    formKey: null,
                    id: "1455783771950178305",
                    menuFlag: false,
                    value: "防邪禁毒",
                    parentId: "1410150291856904193",
                    pidPath: "0-1410150291856904193-1455783771950178305",
                    children: [
                      {
                        flowId: "1456458101518635008",
                        flowKey: "ywgz",
                        formId: null,
                        formKey: null,
                        id: "1455783771950178305",
                        menuFlag: false,
                        value: "防邪",
                        parentId: "1410150291856904193",
                        pidPath: "0-1410150291856904193-1455783771950178305",
                        children: [
                          {
                            flowId: "1456458101518635008",
                            flowKey: "ywgz",
                            formId: null,
                            formKey: null,
                            id: "1455783771950178305",
                            menuFlag: false,
                            value: "防邪禁毒11",
                            parentId: "1410150291856904193",
                            pidPath:
                              "0-1410150291856904193-1455783771950178305",
                            children: [
                              {
                                flowId: "1456458101518635008",
                                flowKey: "ywgz",
                                formId: null,
                                formKey: null,
                                id: "1455783771950178305",
                                menuFlag: false,
                                value: "00011",
                                parentId: "1410150291856904193",
                                pidPath:
                                  "0-1410150291856904193-1455783771950178305",
                              },
                              {
                                flowId: "1456458101518635008",
                                flowKey: "ywgz",
                                formId: null,
                                formKey: null,
                                id: "1455783771950178305",
                                menuFlag: false,
                                value: "000022",
                                parentId: "1410150291856904193",
                                pidPath:
                                  "0-1410150291856904193-1455783771950178305",
                              },
                              {
                                flowId: "1456458101518635008",
                                flowKey: "ywgz",
                                formId: null,
                                formKey: null,
                                id: "1455783771950178305",
                                menuFlag: false,
                                value: "00033",
                                parentId: "1410150291856904193",
                                pidPath:
                                  "0-1410150291856904193-1455783771950178305",
                              },
                            ],
                          },
                          {
                            flowId: "1456458101518635008",
                            flowKey: "ywgz",
                            formId: null,
                            formKey: null,
                            id: "1455783771950178305",
                            menuFlag: false,
                            value: "防邪禁毒22",
                            parentId: "1410150291856904193",
                            pidPath:
                              "0-1410150291856904193-1455783771950178305",
                          },
                          {
                            flowId: "1456458101518635008",
                            flowKey: "ywgz",
                            formId: null,
                            formKey: null,
                            id: "1455783771950178305",
                            menuFlag: false,
                            value: "防邪禁毒33",
                            parentId: "1410150291856904193",
                            pidPath:
                              "0-1410150291856904193-1455783771950178305",
                          },
                        ],
                      },
                      {
                        flowId: "1456458101518635008",
                        flowKey: "ywgz",
                        formId: null,
                        formKey: null,
                        id: "1455783771950178305",
                        menuFlag: false,
                        value: "禁毒",
                        parentId: "1410150291856904193",
                        pidPath: "0-1410150291856904193-1455783771950178305",
                      },
                      {
                        flowId: "1456458101518635008",
                        flowKey: "ywgz",
                        formId: null,
                        formKey: null,
                        id: "1455783771950178305",
                        menuFlag: false,
                        value: "2",
                        parentId: "1410150291856904193",
                        pidPath: "0-1410150291856904193-1455783771950178305",
                      },
                    ],
                  },
                  {
                    flowId: "1456458101518635008",
                    flowKey: "ywgz",
                    formId: null,
                    formKey: null,
                    id: "1455783771950178305",
                    menuFlag: false,
                    value: "1333",
                    parentId: "1410150291856904193",
                    pidPath: "0-1410150291856904193-1455783771950178305",
                  },
                  {
                    flowId: "1456458101518635008",
                    flowKey: "ywgz",
                    formId: null,
                    formKey: null,
                    id: "1455783771950178305",
                    menuFlag: false,
                    value: "1142",
                    parentId: "1410150291856904193",
                    pidPath: "0-1410150291856904193-1455783771950178305",
                  },
                ],
              },
            ],
            getKey: "value",
            text: "事件类别",
            value: "multiCustom",
            placeholder: "请选择事件类别",
            secondValue: "multiCustom-text",
            showValue: { key: "flowKey", value: "value" },
            valueShow: "防邪禁毒-防邪-防邪禁毒11-00011",
          },
          {
            type: "multiCustom",
            styleType: "col",
            options: [
              {
                menuFlag: true,
                value: "社会治安",
                parentId: "0",
                pidPath: "0-1410150291856904193",
                children: [
                  {
                    flowId: "1456458101518635008",
                    flowKey: "ywgz",
                    formId: null,
                    formKey: null,
                    id: "1455783771950178305",
                    menuFlag: false,
                    value: "防邪禁毒",
                    parentId: "1410150291856904193",
                    pidPath: "0-1410150291856904193-1455783771950178305",
                    children: [
                      {
                        flowId: "1456458101518635008",
                        flowKey: "ywgz",
                        formId: null,
                        formKey: null,
                        id: "1455783771950178305",
                        menuFlag: false,
                        value: "防邪",
                        parentId: "1410150291856904193",
                        pidPath: "0-1410150291856904193-1455783771950178305",
                        children: [
                          {
                            flowId: "1456458101518635008",
                            flowKey: "ywgz",
                            formId: null,
                            formKey: null,
                            id: "1455783771950178305",
                            menuFlag: false,
                            value: "防邪禁毒11",
                            parentId: "1410150291856904193",
                            pidPath:
                              "0-1410150291856904193-1455783771950178305",
                            children: [
                              {
                                flowId: "1456458101518635008",
                                flowKey: "ywgz",
                                formId: null,
                                formKey: null,
                                id: "1455783771950178305",
                                menuFlag: false,
                                value: "00011",
                                parentId: "1410150291856904193",
                                pidPath:
                                  "0-1410150291856904193-1455783771950178305",
                              },
                              {
                                flowId: "1456458101518635008",
                                flowKey: "ywgz",
                                formId: null,
                                formKey: null,
                                id: "1455783771950178305",
                                menuFlag: false,
                                value: "000022",
                                parentId: "1410150291856904193",
                                pidPath:
                                  "0-1410150291856904193-1455783771950178305",
                              },
                              {
                                flowId: "1456458101518635008",
                                flowKey: "ywgz",
                                formId: null,
                                formKey: null,
                                id: "1455783771950178305",
                                menuFlag: false,
                                value: "00033",
                                parentId: "1410150291856904193",
                                pidPath:
                                  "0-1410150291856904193-1455783771950178305",
                              },
                            ],
                          },
                          {
                            flowId: "1456458101518635008",
                            flowKey: "ywgz",
                            formId: null,
                            formKey: null,
                            id: "1455783771950178305",
                            menuFlag: false,
                            value: "防邪禁毒22",
                            parentId: "1410150291856904193",
                            pidPath:
                              "0-1410150291856904193-1455783771950178305",
                          },
                          {
                            flowId: "1456458101518635008",
                            flowKey: "ywgz",
                            formId: null,
                            formKey: null,
                            id: "1455783771950178305",
                            menuFlag: false,
                            value: "防邪禁毒33",
                            parentId: "1410150291856904193",
                            pidPath:
                              "0-1410150291856904193-1455783771950178305",
                          },
                        ],
                      },
                      {
                        flowId: "1456458101518635008",
                        flowKey: "ywgz",
                        formId: null,
                        formKey: null,
                        id: "1455783771950178305",
                        menuFlag: false,
                        value: "禁毒",
                        parentId: "1410150291856904193",
                        pidPath: "0-1410150291856904193-1455783771950178305",
                      },
                      {
                        flowId: "1456458101518635008",
                        flowKey: "ywgz",
                        formId: null,
                        formKey: null,
                        id: "1455783771950178305",
                        menuFlag: false,
                        value: "2",
                        parentId: "1410150291856904193",
                        pidPath: "0-1410150291856904193-1455783771950178305",
                      },
                    ],
                  },
                  {
                    flowId: "1456458101518635008",
                    flowKey: "ywgz",
                    formId: null,
                    formKey: null,
                    id: "1455783771950178305",
                    menuFlag: false,
                    value: "1333",
                    parentId: "1410150291856904193",
                    pidPath: "0-1410150291856904193-1455783771950178305",
                  },
                  {
                    flowId: "1456458101518635008",
                    flowKey: "ywgz",
                    formId: null,
                    formKey: null,
                    id: "1455783771950178305",
                    menuFlag: false,
                    value: "1142",
                    parentId: "1410150291856904193",
                    pidPath: "0-1410150291856904193-1455783771950178305",
                  },
                ],
              },
            ],
            getKey: "key",
            search: true,
            text: "事件类别",
            value: "multiCustom2",
            placeholder: "请选择事件类别",
            showValue: { key: "id", value: "value" },
          },
        ],
      },
    };
  },
  methods: {
    customSearchFun(value) {
      uni.showToast({
        title: "搜索框的内容：" + value,
        icon: "none",
      });
    },
  },
};
```

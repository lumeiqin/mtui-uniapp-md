# Form 表单

***

#

[查看案例](https://static-363fc8f1-c547-4a87-8d04-6d5ba4035deb.bspapp.com/#/pages/form/form)

```html

<mt-form :formData="formData" ref="mtForm" @change="changeForm"></mt-form>

<mt-button @click="formValid">校验表单</mt-button>
```

```javascript
export default {
    data() {
        return {
            formData: {
                field: {
                    text: "",
                    pass: "",
                    number: "",
                    phone: "",
                    card: "",
                    opnion: "",
                    opnion1: "",
                    click: "",
                    location: "",
                    code: "",
                    radio: "",
                    selector: "",
                    multiSelector: "",
                    multiCustom: "",
                    multiChoose: "",
                    list: "",
                    date: "",
                    file: ["https://img.alicdn.com/bao/uploaded/i1/132953973/O1CN019EJExH1fDgALQaLt7_!!0-item_pic.jpg_200x200q90.jpg",
                        "https://img.alicdn.com/bao/uploaded/i4/877198864/O1CN01W1apDl2FLlRM3PpzV_!!0-item_pic.jpg_200x200q90.jpg",
                        "https://klxxcdn.oss-cn-hangzhou.aliyuncs.com/histudy/hrm/media/bg3.mp4"
                    ],
                },
                property: [{
                    type: "text",
                    text: "文本",
                    value: "text",
                    countText: true,
                    maxlength: 6,
                    validate: true
                }, {
                    type: "password",
                    text: "密码",
                    value: "pass",
                    validate: true
                }, {
                    type: "number",
                    text: "数值",
                    value: "number",
                    validate: true
                }, {
                    type: "tel",
                    text: "电话号码",
                    value: "phone",
                    validate: true
                }, {
                    type: "ID",
                    text: "身份证",
                    value: "card",
                    validate: true
                }, {
                    type: "textarea",
                    text: "文本框",
                    value: "opnion",
                    validate: true
                }, {
                    type: "click",
                    text: "点击",
                    value: "click",
                }, {
                    type: "location",
                    text: "地址",
                    value: "location",
                    validate: true
                }, {
                    type: "code",
                    text: "验证码",
                    value: "code",
                    phone: "phone",
                    phoneNum: "",
                    second: 20,
                    validate: true
                }, {
                    type: "radio",
                    getKey: "value",
                    showValue: {
                        value: "title"
                    },
                    color: "#2194F2",
                    text: "是否必填",
                    value: "radio",
                    options: [{
                        id: '0',
                        title: '是',
                    }, {
                        id: '1',
                        title: '否',
                    }],
                    validate: true
                }, {
                    type: "selector",
                    showValue: {
                        value: "title",
                        key: "id"
                    },
                    dictionary: "sys_common_nation",
                    text: "单选框",
                    value: "selector",
                    defaultPicker: [0]
                }, {
                    getKey: "key",
                    showValue: {
                        value: "value",
                        key: "key"
                    },
                    defaultPicker: [0, 0, 0, 0, 0],
                    column: 3,
                    dictionary: "multiArr",
                    text: "多级联动",
                    type: "multiSelector",
                    value: "multiSelector",
                    validate: true
                }, {
                    getKey: "key",
                    showValue: {
                        value: "name",
                        key: "id"
                    },
                    dictionary: "customArr",
                    text: "多级联动面板",
                    type: "multiCustom",
                    value: "multiCustom",
                    validate: true
                }, {
                    getKey: "value",
                    type: "multiChoose",
                    text: "多选",
                    value: "multiChoose",
                    dictionary: "chooseArr"
                }, {
                    type: "list",
                    dictionary: "listArr",
                    text: "列表选择",
                    value: "list"
                }, {
                    type: "date",
                    field: "minute",
                    start: "2010/10/17 05:30",
                    end: "2030/07/15 09:10",
                    text: "时间",
                    value: "date"
                }, {
                    type: "file",
                    text: "附件上传",
                    videoQuality: "medium",
                    picQuality: 50,
                    compress: true,
                    value: "file",
                    maxlength: 6,
                    validate: true,
                    tips: "支持上传图片、视频，附件总数不可超过6个，单个附件大小不得超过 100M",
                    fileType: ['pic', 'video', 'audio'],
                    valueShow: []
                }]
            }
        }
    },
    methods: {
        formValid() {
            if (this.$refs.mtForm.validate()) {
                console.log("表单校验成功")
            } else {
                console.log("表单校验失败")
            }
        },
        changeForm(obj) {
            console.log("提交的表单内容：" + obj)
        },
    }
}
```

# Props

| 参数          | 默认值                                           | 类型                      | 说明                                                                                         | 可选值                                           | 是否必填 |
| ------------- |-----------------------------------------------|-------------------------|--------------------------------------------------------------------------------------------|-----------------------------------------------| -------- |
| type          | text                                          | `String`                | 表单类型                                                                                       | `type 说明 `                                    | true     |
| text          | -                                             | `String`                | 输入框左侧文本                                                                                    | -                                             | true     |
| value         | -                                             | `String`                | 在表单内提交时的标识符name                                                                            | -                                             | true     |
| secondValue   | -                                             | `String`                | 在表单内提交时的标识符name，用于多答案的选择器（id或name）                                                         | -                                             | false    |
| icon          | -                                             | `String`                | 自定义输入框头部图标                                                                                 | -                                             | false    |
| valueShow     | -                                             | `String`                | 输入框内容显示                                                                                    | -                                             | false    |
| placeholder   | 请输入 / 请选择                                     | `String`                | 输入框为空时占位符                                                                                  | -                                             | false    |
| validate      | false                                         | `Boolean`               | 是否必填                                                                                       | -                                             | false    |
| only          | false                                         | `Boolean`               | 是否显示表单必填星号                                                                                 | -                                             | false    |
| hide          | false                                         | `Boolean`               | 是否在表单中隐藏                                                                                   | -                                             | false    |
| disabled      | false                                         | `Boolean`               | 是否禁用输入框                                                                                    | -                                             | false    |
| styleType     | row                                           | `String`                | 输入框样式                                                                                      | `row` `col`                                   | false    |
| detailshow    | false                                         | `Boolean`               | value值 详情显示是否置灰                                                                            | -                                             | false    |
| maxlength     | `textarea: 500` `tel: 11` `其他: -1 `           | `Number`                | 最大输入长度，只用于 输入框 和 附件（上传附件个数）                                                                | -                                             | false    |
| countText     | false                                         | `Boolean`               | 监听输入长度，只用于 输入框 ，需要和`maxlength`搭配使用                                                           | -                                             | false    |
| dictionary    | -                                             | `String`                | 对应字典名                                                                                      | -                                             | false    |
| options       | -                                             | `Array` `Array＜Object＞` | 选择器选项，只用于 非date的选择器                                                                        | -                                             | false    |
| getKey        | key                                           | `String`                  | 通过 `getKey` 来指定 showValue 中的属性作为提交至后台的参数名字 `只用于 非 date 的选择器`                               | -                                             | false    |
| showValue     | { `key: "id"`, `value: "value"`, `brief: "brief"` } | `Object`                  | showValue 中 `value` 作为选择器显示内容，`key` 作为提交至后台的参数名字，`只用于 非date 的选择器`; `brief 只用于 type='list'` | -                                             | false    |
| color         | #3490fc                                       | `String`                  | radio 选择框颜色                                                                                | -                                             | false    |
| defaultPicker | `selector: [0]` `multiSelector: [0,0,0,0,0]`  | `Array`                   | 初始显示值，只用于 `type="selector"` `type="multiSelector"`                                         | -                                             | false    |
| search        | false                                         | `Boolean`                 | 是否显示搜索框，只用于 `type="multiCustom"`                                                           | -                                             | false    |
| second        | 60                                            | `Number`                  | 验证码冷却时间，只用于 `type="code"`                                                                  | -                                             | false    |
| phone         | -                                             | `String`                  | 表单中发送验证码的手机 name，只用于 `type="code"`                                                         | -                                             | false    |
| phoneNum      | -                                             | `tel`                     | 表单中发送验证码的手机号，只用于 `type="code"`                                                             | -                                             | false    |
| column        | 2                                             | `Number`                  | 表示选择器的粒度，只用于 `type="multiSelector"`                                                        | `2` `3` `4` `5`                               | false    |
| start         | `1970-01-01 00:00:00`                           | `String`                  | 表示有效日期范围的开始，字符串格式为`YYYY-MM-DD hh:mm:ss`，只用于 `type="date"`                                  | -                                             | false    |
| end           | `2099-12-31 23:59:59`                           | `String`                  | 表示有效日期范围的结束，字符串格式为`YYYY-MM-DD hh:mm:ss`，只用于 `type="date"`                                  | -                                             | false    |
| field         | second                                        | `String`                  | 表示选择器的粒度，只用于 `type="date"`                                                                 | `year` `month` `day` `hour` `minute` `second` | false    |
| tips          | 支持上传图片、视频，附件, 单个附件大小不得超过100M                  | `String`                  | 附件上传提示语                                                                                    | -                                             | false    |
| fileType      | `['pic', 'video', 'audio']`                     | `Array`                   | 附件上传的类型                                                                                    | -                                             | false    |
| compress      | false                                         | `Boolean`                 | 是否压缩上传附件                                                                                   | -                                             | false    |
| picQuality    | 40                                            | `Number`                  | 图片压缩质量                                                                                     | -                                             | false    |
| videoQuality  | high                                          | `String`                  | 视频压缩质量                                                                                     | -                                             | false         |

### type 说明

| name          | 说明                                       |
| ------------- | ------------------------------------------ |
| text          | 普通文本输入框                             |
| ID            | 带身份证号规则校验的数值型输入框           |
| tel           | 带电话号码规则校验的数值型输入框           |
| number        | 数值型输入框                               |
| password      | 密码输入框                                 |
| click         | 提供点击事件的表单项                       |
| location      | 地图定位选择器                             |
| code          | 验证码输入框                               |
| textarea      | 文本区域输入框(字符长度大于普通文本输入框) |
| radio         | 单项选择器                                 |
| selector      | 单列选择器                                 |
| multiSelector | 多列选择器                                 |
| multiCustom   | 多列选择器-面板模式                        |
| multiChoose   | 多选选择器                                 |
| list          | 单选列表                                   |
| date          | 年月日时分秒选择器                         |
| file          | 附件上传                                   |

# Slots

| 插槽名 | 默认值 | 说明                                              |
|-----| ------ |-------------------------------------------------|
| -   | -      | 当search为true时，用于自定义搜索结果内容 `只用于type=multiCustom` |

# Events

| 事件       | 说明                         | 回调参数          |
| ---------- |----------------------------|---------------|
| toCamera   | `type="ID"：点击扫描icon时触发 `   | `item: 当前对象`  |
| clickEvent | `type="click"：点击输入框时触发 `   | `item: 当前对象`  |
| codeEvent | `type="code"：点击获取验证码按钮后触发` | `item: 当前对象`  |
| customSearch | `type="multiCustom"：搜索框输入时触发`      | `value：搜索框内容` |
| change     | 在表单中有参数变动时触发               | `field`       |

### showValue 说明

| key   | 默认值 | 说明                 |
| ----- | ------ | -------------------- |
| key   | id     | 提交至后台的参数名字 |
| value | value  | 表单项上的回显标题   |
| brief | brief  | 表单项上的回显详情   |
		


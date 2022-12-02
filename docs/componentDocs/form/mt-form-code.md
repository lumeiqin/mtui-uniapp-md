# Code 验证码

***

#

[查看案例](https://static-363fc8f1-c547-4a87-8d04-6d5ba4035deb.bspapp.com/#/pages/form/code)

```html
<!-- 根据phone字段获取手机号 -->
<mt-form :formData="codeFormData" @codeEvent="getCodeFun"></mt-form>


<!-- 根据phoneNum字段获取手机号 -->
<mt-form :formData="codeFormData1" @codeEvent="getCodeFun"></mt-form>
```

```javascript
export default {
    data() {
        return {
            codeFormData: {
                "field": {
                    "tel": "",
                    "code": ""
                },
                "property": [
                    {
                        "type": "tel",
                        "validate": true,
                        "text": "联系方式",
                        "value": "tel",
                        "placeholder": "请输入手机号码",
                        "valueShow": ""
                    },
                    {
                        "type": "code",
                        "validate": true,
                        "text": "验证码",
                        "value": "code",
                        "placeholder": "phone",
                        "second": "20",
                        "phone": "tel",
                        "valueShow": ""
                    }
                ]
            },
            codeFormData1: {
                "field": {
                    "code1": ""
                },
                "property": [
                    {
                        "type": "code",
                        "validate": true,
                        "text": "验证码",
                        "value": "code1",
                        "placeholder": "phoneNum",
                        "second": "30",
                        "phoneNum": "15112345678"
                    }
                ]
            }
        }
    },
    methods: {
        getCodeFun(item) {
            uni.showToast({
                title: "发送的手机号为：" + item.phoneNum,
                icon: "none"
            })
        }
    }
}
```
		


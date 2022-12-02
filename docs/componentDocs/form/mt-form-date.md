# Date 日期

***

#

[查看案例](https://static-363fc8f1-c547-4a87-8d04-6d5ba4035deb.bspapp.com/#/pages/form/date)

```html
<!-- 自定义配置 -->
<mt-form :formData="dateFormData" @change="changeDate"></mt-form>
```

```javascript
export default {
    data() {
        return {
            dateFormData: {
                "field": {
                    "date": "",
                    "date1": ""
                },
                "property": [
                    {
                        "type": "date",
                        "validate": true,
                        "text": "巡查时间",
                        "value": "date",
                        "placeholder": "请选择巡查时间",
                        "field": "minute",
                        "valueShow": ""
                    },
                    {
                        "type": "date",
                        "styleType": "col",
                        "text": "巡查时间",
                        "value": "date1",
                        "field": "day",
                        "start": "2018-01-01 00:00:00",
                        "end": "2030-01-01 23:59:59",
                        "valueShow": ""
                    }
                ]
            }
        }
    },
    methods: {
        changeDate(item) {
            uni.showToast({
                title: "表单提交的结果：" + JSON.stringify(item),
                icon: "none"
            })
        }
    }
}
```
		


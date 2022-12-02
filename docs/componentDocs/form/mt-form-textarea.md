# Textarea 文本框

***

#

[查看案例](https://static-363fc8f1-c547-4a87-8d04-6d5ba4035deb.bspapp.com/#/pages/form/textarea)

```html
<!-- 自定义配置 -->
<mt-form :formData="textareaFormData"></mt-form>
```

```javascript
export default {
  mixins: [common],
  data() {
    return {
      textareaFormData: {
        "field": {
          "textarea": "",
          "textarea1": "",
          "textarea2": "详情内容颜色为灰色，可用于详情模式"
        },
        "property": [
          {
            "type": "textarea",
            "validate": true,
            "text": "意见",
            "value": "textarea",
            "placeholder": "请输入意见"
          },
          {
            "type": "textarea",
            "styleType": "col",
            "countText": true,
            "text": "意见",
            "value": "textarea1",
            "placeholder": "限制字数，并显示计数器",
            "maxlength": "200",
            "valueShow": ""
          },
          {
            "type": "textarea",
            "validate": true,
            "detailshow": true,
            "text": "意见",
            "value": "textarea2",
            "maxlength": "100",
            "valueShow": "详情内容颜色为灰色，可用于详情模式"
          }
        ]
      }
    }
  }
}
```
		


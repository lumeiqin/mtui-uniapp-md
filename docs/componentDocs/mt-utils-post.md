# Post 请求
***
#



#### url 为 $mt 配置的 urlData 对象中的项
```javascript
// 'getFormData' 为 $mt 配置的 urlData 对象中的项
this.$mt.post('getFormData', {}, 'form', {}).then(res => {}) // 默认 type = default



this.$mt.post({
    url: 'getFormData',
    type: 'login' // 'login' 为 $mt 配置的 serveModeArr 数组中的项
}, {}).then(res => {})
```


#### url 为 接口地址
```javascript
this.$mt.post('/api/common/getJsonFormByKey', {}).then(res => {}) // 默认 type = default



this.$mt.post({
    url: '/api/common/getJsonFormByKey',
    type: 'login' // 'login' 为 $mt 配置的 serveModeArr 数组中的项
}, {}).then(res => {})
```


#### url 为 服务器地址 + 接口地址
```javascript
this.$mt.post('http://gz.login.com:6342/api/common/getJsonFormByKey', {}, 'form', {}).then(res => {})
```

#
#
### 参数说明
#
| 参数          | 默认值  | 类型                | 说明                                                                              | 可选值     | 是否必要  |
| ------------- |------|-------------------|---------------------------------------------------------------------------------|---------|-------|
| urlParams     | -    | `String` `Object` | `第一个参数：接口地址相关参数` `String：url (默认 type = default)`  `Object：{url: "", type: ""}` | -       | true  |
| requestParams | `{}` | `Object`          | `第二个参数：接口参数`                                                                    | -       | false |
| submitType | json | `String`          | `第三个参数：接口参数提交方式 "content-type" 的值`                                              | `form` `json` | false |
| headerParams  | `{}` | `Object`          | `第四个参数：接口头部`                                                                    | -       |   false    |


# File 请求

***

#

### 单附件上传
```javascript
/* 
 * * * 单附件上传 
 */
const filePath = "_doc/uniapp_temp_1659077550037/compressed/1659077558355_1659077558140_739bc641140e4919a4c2182cd7a45b6a(1).jpeg";


this.$mt.fileUpload(
    'getFormData', // 'getFormData' 为 $mt 配置的 urlData 对象中的项，默认 type = default
    
    filePath, // 文件本体
    
    { module: "eventSelfPath" }, // 接口其他参数 
    
    { }, // 接口头部
    
    'files', // 文件对应的 key

    'single' // 附件提交方式：单附件上传（ 可不做设置，默认为single ）
    
).then(res => {})
```

### 多附件上传
```javascript
/* 
 * * * 多附件上传
 */
const files = [{
    "name": "file0",
    "uri": "_doc/uniapp_temp_1659077550037/compressed/1659077558355_1659077558140_739bc641140e4919a4c.jpeg"
}, {
    "name": "file1",
    "uri": "_doc/uniapp_temp_1659077550037/compressed/1659077558356_1659077558210_20191006024503940.jpg"
}];



this.$mt.fileUpload(
    {
        url: '/api/common/getJsonFormByKey', // 接口地址
        type: 'login' // 'login' 为 $mt 配置的 serveModeArr 数组中的项
    },
    
    files, // 文件本体
    
    { module: "eventSelfPath" }, // 接口其他参数 
    
    { }, // 接口头部
    
    '', // 文件对应的 key，这个参数在此模式下无效
    
    'multi' // 附件提交方式：多附件上传
    
).then(res => {})
```

#

#

### 参数说明

#### [uni.uploadFile](https://uniapp.dcloud.net.cn/api/request/network-file.html#uploadfile)

#

| 参数          | 默认值 | 类型              | 说明                                                                              | 可选值           | 是否必要 |
| ------------- | ------ | ----------------- |---------------------------------------------------------------------------------| ---------------- | -------- |
| urlParams     | -      | `String` `Object` | `第一个参数：接口地址相关参数` `String：url (默认 type = default)`  `Object：{url: "", type: ""}` | -                | true     |
| fileName      | -      | `String` `Array`  | `第二个参数：文件本体` `single：filePath` `multi：files`                                    | -                | true     |
| requestParams | `{}`   | `Object`          | `第三个参数：接口其他参数：formData`                                                         | -                | false    |
| headerParams  | `{}`   | `Object`          | `第四个参数：接口头部：header`                                                             | -                | false    |
| nameKey       | file   | `String`            | `第五个参数：文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容` `只用于 submitMethods="single"`  | -                | false    |
| submitMethods | single | `String`            | `第六个参数：附件提交方式`                                                                  | `single` `multi` | false         |

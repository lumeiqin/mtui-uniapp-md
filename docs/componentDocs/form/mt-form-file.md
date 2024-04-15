# File 附件上传

---

#

[查看案例](https://env-00jxgns8zjjt-static.normal.cloudstatic.cn/index.html#/pages/form/file)

```html
<!-- 自定义配置 -->
<mt-form :formData="fileFormData" @change="changeFile"></mt-form>
```

```javascript
export default {
  data() {
    return {
      fileFormData: {
        field: {
          file: [
            "https://img1.baidu.com/it/u=994158170,3342000586&fm=26&fmt=auto",
          ],
          file1: [],
        },
        property: [
          {
            type: "file",
            validate: true,
            compress: false,
            text: "图片",
            value: "file",
            tips: "仅支持上传图片",
            maxlength: 3,
            fileType: [
              { type: "pic", typeName: "图片", icon: "icon-tukuxiangce" },
            ],
            valueShow: [],
          },
          {
            type: "file",
            validate: true,
            compress: true,
            videoQuality: "medium",
            text: "附件上传",
            value: "file1",
            maxlength: 6,
            fileType: [
              { type: "camera", typeName: "拍照", icon: "icon-xiangji" },
              { type: "album", typeName: "照片", icon: "icon-tukuxiangce" },
              { type: "video", typeName: "视频", icon: "icon-shipin" },
            ],
            picQuality: "50",
            tips: "支持上传图片、视频，附件, 单个附件大小不得超过100M",
          },
        ],
      },
    };
  },
  methods: {
    changeFile(item) {
      uni.showToast({
        title: "表单提交的结果：" + JSON.stringify(item),
        icon: "none",
      });
    },
  },
};
```

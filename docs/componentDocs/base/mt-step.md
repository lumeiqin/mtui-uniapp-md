# Step

---

#

[查看案例](https://env-00jxgns8zjjt-static.normal.cloudstatic.cn/index.html#/pages/base/step)

```html
<!-- 基础用法 -->
<mt-step v-for="v in dutyRecordList" :time="v.createTime">
  <view class="dutyListSteps">{{v.organName}}</view>
</mt-step>
```

```javascript
export default {
  data() {
    return {
      dutyRecordList: [
        {
          organName: "电化厂",
          createTime: "时间：2022-10-01",
        },
        {
          organName: "电化厂",
          createTime: "时间：2022-10-01",
        },
        {
          organName: "电化厂",
          createTime: "时间：2022-10-01",
        },
      ],
    };
  },
};
```

```css
.dutyListSteps {
  padding: 10rpx 20rpx;
  font-size: 28rpx;
  line-height: 80rpx;
  font-weight: 500;
  color: #f4787e;
  text-shadow: 0px 3px 4px rgba(244, 124, 127, 0.3);
}
```

# Props

| 参数 | 默认值       | 类型     | 说明     | 可选值 | 是否必要 |
| ---- | ------------ | -------- | -------- | ------ | -------- |
| time | `2022-10-10` | `String` | 流程时间 | -      | true     |

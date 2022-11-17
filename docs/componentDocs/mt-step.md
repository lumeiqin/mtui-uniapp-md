# Step
***
#

[//]: # (<iframe width='375px' height='667px' frameborder=0 allowfullscreen="true" src="https://static-363fc8f1-c547-4a87-8d04-6d5ba4035deb.bspapp.com/#/pages/step"></iframe>)

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
            dutyRecordList: [{
                organName: "电化厂",
                createTime: "时间：2022-10-01",
            }, {
                organName: "电化厂",
                createTime: "时间：2022-10-01",
            }, {
                organName: "电化厂",
                createTime: "时间：2022-10-01",
            }],
        }
    }
}
```

```css
.dutyListSteps {
    padding: 10rpx 20rpx;
    font-size: 28rpx;
    line-height: 80rpx;
    font-weight: 500;
    color: #F4787E;
    text-shadow: 0px 3px 4px rgba(244, 124, 127, 0.3);
}
```

# Props

| 参数   | 默认值 | 类型            | 说明             | 可选值 | 是否必要 |
| ------ | ------ | --------------- | ---------------- | ------ |------ |
| time   | 2022-10-10  | `String` | 流程时间         | -      | true |



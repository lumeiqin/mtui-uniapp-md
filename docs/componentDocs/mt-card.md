# Card
***
#

[//]: # (<iframe width='375px' height='667px' frameborder=0 allowfullscreen="true" src="https://static-363fc8f1-c547-4a87-8d04-6d5ba4035deb.bspapp.com/#/pages/card"></iframe>)

[查看案例](https://static-363fc8f1-c547-4a87-8d04-6d5ba4035deb.bspapp.com/#/pages/card)

```html
<!-- 基础用法 -->
<mt-card :title="title" :notes="noteArr"></mt-card>


<!-- 图文卡片 + 显示小标签 -->
<mt-card :title="title" :notes="noteArr" :tags="tagArr" :thumb="item.thumb" :config="item.config"
         :clickable="true" 
         
         @click="cardEvent(item)" 
         v-for="(item, index) in imgCardList" :key="index">
</mt-card>


<!-- 显示checkbox多选框 + 显示大标签 -->
<mt-card :title="title" :notes="noteArr" :bottomBadges="bottomBadgesArr" :config="item.config"
         :checkItem="item.checkItem" 
         
         @checkChange="checkChange" 
         v-for="(item, index) in checkCardList" :key="index">
</mt-card>


<!-- 显示右侧开关 + 箭头 -->
<mt-card :title="title" :notes="noteArr" :config="item.config"
         
         @switchChange="switchChange($event, item)" 
         v-for="(item, index) in switchCardList" :key="index">
</mt-card>


<!-- 显示右侧文字 + 单按钮 -->
<mt-card :title="title" :notes="noteArr" :btnGroup="oneButtonArr" rightText="右侧文字"></mt-card>


<!-- 显示右侧标签 + 多按钮 -->
<mt-card :title="title" :notes="noteArr" :btnGroup="moreButtonArr" badgeText="2" 
         
         @btnEvent="btnEvent">
</mt-card>


<!-- 禁用模式 -->
<mt-card :title="title" :notes="noteArr" :btnGroup="moreButtonArr" badgeText="2" disabled></mt-card>
```

```javascript
export default {
    data() {
        title: "江苏省无锡市滨湖区具区路与缘溪道交汇处融创茂",
        // notes
        noteArr: [{
            noteLabel: '使用现状',
            noteText: '闲置',
            valueKey: 'noteText',
            icon: ""
        }, {
            noteLabel: '建筑名称',
            noteText: '市网格中心办公大楼',
            valueKey: 'noteText',
            icon: ""
        }, {
            noteLabel: '建筑地址',
            noteText: '江苏省无锡市梁溪区北大街道北创科技大厦',
            valueKey: 'noteText',
            icon: ""
        }],
        // tags
        tagArr: [{
            name: "测试tag",
            color: "#2194F2",
            size: "24rpx",
            lineHeight: "24rpx",
            border: "1px solid #2194F2",
            padding: "6rpx 16rpx",
            bg: "#fff",
            radius: "20rpx",
            scale: 0.9
        }],
        // btnGroup
        oneButtonArr: [{
            name: '删除', // 按钮名字
            value: 'delete', // 按钮标识
            color: '#2194F2', // 按钮颜色
            radius: '30px', // 按钮圆角
            height: '30px', // 按钮高度
            fontsize: '14px', // 按钮字体大小
            noBorder: true, // 是否无边框（type=hollow）
            shadow: 'none' // 按钮阴影
        }],
        moreButtonArr: [{
            type: 'default', // 按钮类型
            name: '详情', // 按钮名字
            value: 'delete', // 按钮标识
            color: '#2194F2', // 按钮颜色
            radius: '34px', // 按钮圆角
            height: '34px', // 按钮高度
            fontsize: '14px', // 按钮字体大小
            noBorder: false, // 是否无边框（type=hollow）
            shadow: '0px 3px 8px 0px rgba(0,0,0,0.1)' // 按钮阴影
        }, {
            name: '删除', // 按钮名字
            value: 'delete', // 按钮标识
            color: '#2194F2', // 按钮颜色
            radius: '34px', // 按钮圆角
            height: '34px', // 按钮高度
            fontsize: '14px', // 按钮字体大小
            noBorder: false, // 是否无边框（type=hollow）
            shadow: '0px 3px 8px 0px rgba(0,0,0,0.1)' // 按钮阴影
        }],
        // bottomBadges
        bottomBadgesArr: [{
            badgeLabel: '事项大类123',
            badgeText: '事项大类',
            valueKey: 'badgeLabel',

            color: "#f0ad4e",
            size: "24rpx",
            lineHeight: "24rpx",
            border: "1px solid #f0ad4e",
            padding: "6rpx 16rpx",
            bg: "transparent",
            radius: "20rpx"
        }],
        // 图文卡片 + 显示小标签
        imgCardList: [{
            config: {
                thumbType: 'square',
                thumbSize: 'lg'
            },
            thumb: 'http://www.gaoimg.com/uploads/allimg/221023/1-221023114252925.jpg',
        }],
        // 显示checkbox多选框 + 显示大标签
        checkCardList: [{
            config: {
                showCheck: true,
                ellipsis: 1
            },
            checkItem: {
                value: '1',
                checked: false
            }
        }],
        // 显示右侧开关 + 箭头
        switchCardList: [{
            config: {
                showArrow: true,
                showSwitch: true
            }
        }]
    },
    methods: {
        cardEvent(value) {
            console.log(value)
        },
        checkChange(value) {
            console.log(value)
        },
        switchChange(e, item) {
            console.log(e, item)
        },
        btnEvent(value) {
            console.log(value)
        },
    }
}
```

# Props

| 参数            | 默认值                                | 类型                 | 说明                                                                                                                                                                                                                                                   | 可选值                                              | 是否必填 |
| --------------- |------------------------------------|--------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------| -------- |
| disabled        | false                              | `Boolean` `String` | 是否禁用                                                                                                                                                                                                                                                 | -                                                | false    |
| clickable       | false                              | `Boolean`          | 是否可点击                                                                                                                                                                                                                                                | -                                                | false    |
| link            | -                                  | `Boolean` `String` | 页面跳转类型                                                                                                                                                                                                                                               | `navigateTo` `redirectTo` `reLaunch` `switchTab` | false|
| url             | -                                  | `String`           | 页面跳转路径                                                                                                                                                                                                                                               | -                                                | false    |
| checkItem       | `{}` | `Object`           | checkbox的配置参数： `value：当前元素的标识` `checked：是否选中`                                                                                                                                                                                                        | -                                                | false    |
| thumb           | -                                  | `String`           | 左侧图片                                                                                                                                                                                                                                                 | -                                                | false    |
| thumbTag        | -                                  | `String`           | 左侧图片的左上角图标                                                                                                                                                                                                                                           | -                                                | false    |
| title           | 标题                                 | `String`           | 标题                                                                                                                                                                                                                                                   | -                                                | true     |
| notes           | `[]`                                 | `Array <Object>`   | 副标题的配置参数：`icon：图标` `noteLabel：冒号左侧标题` `noteText：冒号右侧内容` `ellipsis：多行省略`                                                                                                                                                                              | -                                                | false    |
| tags            | `[]`                                 | `Array <Object>`   | 标签的配置参数：`name：标签名字` `color：标签字体颜色` `size：标签字体大小` `lineHeight：标签字体行高` `border：标签边框` `padding：标签的padding` `bg：标签背景` `radius：标签圆角` `scale：标签缩放等级 `                                                                                                      | -                                                | false |
| rightText       | -                                  | `String`           | 右侧文字                                                                                                                                                                                                                                                 | -                                                | false    |
| switchChecked   | false                              | `Boolean` `String` | switch的选中状态                                                                                                                                                                                                                                          | -                                                | false    |
| badgeText       | -                                  | `String`           | 标签内容                                                                                                                                                                                                                                                 | -                                                | false    |
| bottomBadges    | `[]`                                 | `Array <Object>`   | 下侧标签的配置参数：`badgeLabel: 标签内容` `badgeText：标签内容` `valueKey：标签内容的参数名（badgeLabel或badgeText）` `color：标签字体颜色` `size：标签字体大小` `lineHeight：标签字体行高` `border：标签边框` `padding：标签的padding` `bg：标签背景` `radius：标签圆角`                                                  | -                                                | false    |
| btnGroup        | `[]`                                 | `Array <Object>`   | 下侧按钮的配置参数：`name：按钮名字` `value：按钮标识` `noBorder：是否无边框（type=hollow，默认：false）` `type：按钮类型（默认：hollow）` `color：按钮颜色（默认：主题色）` `radius：按钮圆角角度（默认：34px）` `height：按钮高度（默认：34px）` `fontsize：按钮字体大小（默认：14px）` `shadow：按钮阴影（默认：'0px 3px 8px 0px rgba(0,0,0,0.1)'）` | -                                                | false         |


### config 说明

| 参数          | 默认值                                          | 类型      | 说明                                                                            | 可选值            |
| ------------- | ----------------------------------------------- | --------- | ------------------------------------------------------------------------------- | ----------------- |
| direction     | row                                             | `String`  | 卡片方向                                                                        | `row` `col`       |
| thumbSize     | md                                              | `String`  | 左侧图片的尺寸                                                                  | `sm` `md` `lg`    |
| thumbType     | circle                                          | `String`  | 左侧图片的形状                                                                  | `circle` `square` |
| thumbTagSM    | false                                           | `Boolean` | 是否缩小左侧图片的角标                                                          | -                 |
| showExtraIcon | false                                           | `Boolean` | 左侧图标，只有当thumb为空，才能使用此参数                                       | -                 |
| extraIcon     | { `type: 'contact'`, `color: '#000000'`, `size: 20` } | `Object`  | 左侧图标的配置参数：`type：图标图案（参考示例）` `color：图标颜色` `size：图标大小` | -                  |
| ellipsis      | 2                                               | `Number`  | 标题显示的行数                                                                  | -                 |
| showArrow     | false                                           | `Boolean` | 是否显示箭头                                                                    | -                 |
| showCheck     | false                                           | `Boolean` | 是否显示checkbox                                                                | -                 |
| showSwitch    | false                                           | `Boolean` | 右侧是否显示switch                                                              | -                 |
| canSwitch     | false                                           | `Boolean` | switch是否禁用                                                                  | -                 |


# Slots

| 插槽名 | 默认值                  | 说明         |
| ------ | ----------------------- | ------------ |
| left   | checkbox，图片，uni图标 | 列表左侧内容 |
| middle | 标题，副标题，标签      | 列表主要内容 |
| right  | switch，文字，标签      | 列表右侧内容 |


# Events

| 事件 | 说明 | 回调参数 |
| ---- | ---- | -------- |
| click        | 列表点击时触发       | `普通点击：- ` `link跳转：res, err` |
| switchChange | switch值改变时触发   | `value`                     |
| checkChange    | checkbox值改变时触发 | `value`                     |
| btnEvent     | 按钮点击时触发       | `{ btn: item }`             |

		

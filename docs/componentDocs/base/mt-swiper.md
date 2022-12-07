# Swiper

***

#          

[查看案例](https://static-363fc8f1-c547-4a87-8d04-6d5ba4035deb.bspapp.com/#/pages/base/swiper)

```html
<!-- 基础用法 -->
<mt-swiper ref="mySwiper" :config="swiperConfig">
    <mt-swiper-item>
        <div class="item-content item1">SwiperItem - 0</div>
    </mt-swiper-item>
    <mt-swiper-item>
        <div class="item-content item2">SwiperItem - 1</div>
    </mt-swiper-item>
    <mt-swiper-item>
        <div class="item-content item3">SwiperItem - 2</div>
    </mt-swiper-item>
</mt-swiper>


<!-- 图片轮播 -->
<mt-swiper ref="mtSwiper" :urlList="imgList" :slip="false" :config="swiperConfig"/>
<view class="btnArr">
    <mt-button @click="preClick" style="margin-right: 50px">上一页</mt-button>
    <mt-button @click="nextClick">下一页</mt-button>
</view>
```

```javascript
export default {
    data() {
        return {
            swiperConfig: {
                width: 300,
                height: 200
            },
            imgList: [
                'https://ts2.cn.mm.bing.net/th?id=OIP-C.xc5KsKdO2u9T5hBCpE0yCgHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2',
                'https://tse4-mm.cn.bing.net/th/id/OIP-C.yTaV7x7n9LXjYN440YsIhQHaFj?w=196&h=147&c=7&r=0&o=5&dpr=2&pid=1.7',
                'https://ts1.cn.mm.bing.net/th?id=OIP-C.pAIGQZalV1QJV7n7fupiCwHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2'
            ]
        }
    },
    methods: {
        preClick() {
            this.$refs.mtSwiper.previous()
        },
        nextClick() {
            this.$refs.mtSwiper.next()
        }
    }
}
```

```css
.item-content {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: #00FFCC;
}

.item2 {
    background-color: #669966;
}

.item3 {
    background: #9999CC;
}

.btnArr {
    width: 320px;
    display: flex;
    justify-content: space-around;
    padding: 20px 10px;
}
```

# Props

| 参数   | 默认值    | 类型        | 说明                                                          | 可选值 | 是否必要 |
| ------ |--------|-----------|-------------------------------------------------------------| ------ |------ |
| urlList   | false  | `Array`   | 图片列表                                                        | -      | false |
| startIndex | 0      | `Number`  | 起始索引                                                        | -      |false |
| autoPlayDelay | `null` | `Number`  | `>= 0：则将会将此值当做 delay的时间(单位为 ms)进行自动轮播；` `<0 或 null: 则不自动轮播` | 一般建议设置为 3000      |false |
| duration | 350    | `Number`  | 自动滚动到稳定位置所需的时间，`单位：秒(ms)`                                   | -       |false |
| showDot | true   | `Boolean` | 是否显示索引点                                                     | -       |false |
| slip | true   | `Boolean` | 轮播图是否可以滑动                                                   | -       |false |
| config | `{}`     | `Object`          | 自定义参数                                                       | -       |false |

### config 说明

| 参数     | 默认值  | 类型       | 说明            | 可选值 |
| -------- |------|----------|---------------|-----|
| width   | 设备宽度 | `String` | 盒子的宽度，`单位：px` | -   |
| height  | 200  | `Number` | 盒子的高度，`单位：px` | -   |

# Slots

| 插槽名 | 默认值 | 说明                    |
| ------ | ------ |-----------------------|
| -      | -      | 盒子内容，需要轮播效果必须使用将内容存于 `mt-swiper-item` |

# Events

| 事件  | 说明    | 回调参数  |
| ----- |-------|-------|
| click | 点击轮播图时触发 | `index` |
| change | 改变时触发 | `index` |

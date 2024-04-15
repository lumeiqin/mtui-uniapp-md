# Swiper

---

#

[查看案例](https://env-00jxgns8zjjt-static.normal.cloudstatic.cn/index.html#/pages/base/swiper)

```html
<!-- 基础用法 -->
<mt-swiper ref="swiper1">
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
<mt-swiper ref="swiper2" :urlList="imgList" />
<view class="btnArr">
  <mt-button @click="preClick" style="margin-right: 60px">上一页</mt-button>
  <mt-button @click="nextClick">下一页</mt-button>
</view>

<!-- 数据请求 -->
<mt-swiper ref="swiper3" :loading="loading" @change="changeSwiper">
  <mt-swiper-item v-for="(item, index) in dataList" :key="index">
    <img :src="item" alt="" />
  </mt-swiper-item>
</mt-swiper>
```

```javascript
export default {
  data() {
    return {
      imgList: [
        "https://ts2.cn.mm.bing.net/th?id=OIP-C.xc5KsKdO2u9T5hBCpE0yCgHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2",
        "https://tse4-mm.cn.bing.net/th/id/OIP-C.yTaV7x7n9LXjYN440YsIhQHaFj?w=196&h=147&c=7&r=0&o=5&dpr=2&pid=1.7",
        "https://ts1.cn.mm.bing.net/th?id=OIP-C.pAIGQZalV1QJV7n7fupiCwHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2",
      ],
      dataList: [],
      loading: false,
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      setTimeout(() => {
        this.dataList = this.imgList;
        this.loading = true;
      }, 2000);
    },
    changeSwiper(index) {
      uni.showToast({
        title: "当前的项：" + index,
        icon: "none",
      });
    },
    preClick() {
      let _this = this;
      _this.$nextTick(() => {
        _this.$refs.swiper1.previous();
        _this.$refs.swiper2.previous();
        _this.$refs.swiper3.previous();
      });
    },
    nextClick() {
      this.$refs.swiper1.next();
      this.$refs.swiper2.next();
      this.$refs.swiper3.next();
    },
  },
};
```

```css
.item-content {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #00ffcc;
}

.item2 {
  background-color: #669966;
}

.item3 {
  background: #9999cc;
}

img {
  width: 100%;
  height: 100%;
  display: block;
}

.btnArr {
  display: flex;
  justify-content: space-around;
  padding: 20px 10px;
}
```

# Props

| 参数       | 默认值 | 类型      | 说明                                                          | 可选值 | 是否必要 |
| ---------- | ------ | --------- | ------------------------------------------------------------- | ------ | -------- |
| urlList    | false  | `Array`   | 图片列表                                                      | -      | false    |
| startIndex | 0      | `Number`  | 起始索引                                                      | -      | false    |
| showDot    | true   | `Boolean` | 是否显示索引点                                                | -      | false    |
| height     | 400rpx | `String`  | 轮播图高度                                                    | -      | false    |
| loading    | true   | `Boolean` | 接口获取数据填充时的过渡状态 `true：加载完成` `false：加载中` | -      | true     |

# Slots

| 插槽名 | 默认值 | 说明                                                      |
| ------ | ------ | --------------------------------------------------------- |
| -      | -      | 盒子内容，需要轮播效果必须使用将内容存于 `mt-swiper-item` |

# Events

| 事件   | 说明             | 回调参数 |
| ------ | ---------------- | -------- |
| click  | 点击轮播图时触发 | `index`  |
| change | 改变时触发       | `index`  |

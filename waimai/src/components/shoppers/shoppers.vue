<template>
  <div>
    <div class="header">
      <ul>
        <li>
          <div class="content-wrapper">
            <div class="avatar">
              <img width="64" height="64" :src="seller.avatar">
            </div>
            <div class="content">
              <div class="title">
                <span class="name">{{seller.name}}</span>
              </div>
              <div class="description">
                {{seller.description}}/{{seller.deliveryTime}}分钟
              </div>
              <div v-if="seller.supports" class="support">
                <span class="icon" :class="classMap[seller.supports[0].type]"></span>
                <span class="text">{{seller.supports[0].description}}</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <h1>This is Shoppers</h1>
    <div><a v-link="{path: '/tabs/goods'}">Click To goods here</a></div>
    <div class="bottom">
      <div class="tab-item">
        <span class="icon-waimai"></span>
        <a v-link="{path: '/tabs/goods'}">外卖</a>
      </div>
      <div class="tab-item">
        <span class="icon-order"></span>
        <a v-link="{path: '/tabs/ratings'}">订单</a>
      </div>
      <div class="tab-item">
        <span class="icon-user"></span>
        <a v-link="{path: '/tabs/seller'}">我的</a>
      </div>
    </div>
  </div>
</template>

<script>
  const ERR_OK = 0;

  export default {
    data() {
      return {
        seller: {},
        classMap: []
      };
    },
    methods: {
      requestSeller() {
        this.$http.get('/api/seller?id=' + this.seller.id).then((response) => {
          response = response.body;
          if (response.errno === ERR_OK) {
//          扩展属性同时不影响id
            this.seller = Object.assign({}, this.seller, response.data);
            this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
          }
        });
      }
    },
    created() {
      this.requestSeller();
    }
  };

</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin"

  .header
    position: relative
    overflow: hidden
    color: #fff
    background: rgba(7, 17, 27, .5)
    .content-wrapper
      position: relative
      padding: 24px 12px 18px 24px
      font-size: 0
      .avatar
        display: inline-block
        vertical-align: top
        img
          border-radius: 2px
      .content
        display: inline-block
        margin-left: 16px
        .title
          margin: 2px 0 8px 0
          .brand
            display: inline-block
            vertical-align: top
            width: 30px
            height: 18px
            line-height: 18px
            bg-image("brand")
            background-size: 30px 18px
            background-repeat: no-repeat
          .name
            margin-left: 6px
            font-size: 16px
            font-weight: bold
            line-height: 18px
        .description
          margin-bottom: 10px
          font-size: 12px
          line-height: 12px

  .bottom
    display: flex
    width: 100%
    height: 50px
    line-height: 50px
    position: absolute
    bottom: 0
    background: #eee
    //border-bottom: 1px solid rgba(7,17,27,0.1)
    .tab-item
      flex: 1
      text-align: center
      & > a
        display: inline-block
        text-decoration: none
        font-size: 14px
        color: rgb(77, 85, 93)
        &.active
          color: rgb(240, 20, 20)
</style>

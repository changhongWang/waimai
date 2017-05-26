<template>
  <div>
    <router-view></router-view>
    <!--<tabs></tabs>-->
  </div>
  <!--<div>-->
    <!--<v-header :seller="seller"></v-header>-->
    <!--<div class="tab border-1px">-->
      <!--<div class="tab-item">-->
        <!--<a v-link="{path: '/goods'}">商品</a>-->
      <!--</div>-->
      <!--<div class="tab-item">-->
        <!--<a v-link="{path: '/ratings'}">评价</a>-->
      <!--</div>-->
      <!--<div class="tab-item">-->
        <!--<a v-link="{path: '/seller'}">商家</a>-->
      <!--</div>-->
    <!--</div>-->
    <!--<router-view :seller="seller" keep-alive></router-view>-->
  <!--</div>-->
</template>

<script>
//  import header from 'components/header/header.vue';
  import {urlParse} from 'common/js/util';
//  import tabs from 'components/tabs/tabs';

  // Ajax 请求数据正常， 状态码为0
  // const ERR_OK = 0;

  export default{
    data() {
      return {
        seller: {
          id: (() => {
            let queryParam = urlParse();
            return queryParam.id;
          })()
        }
      };
    },
    created() {
//      this.requestSeller();
    },
    /* methods: {
      requestSeller() {
        this.$http.get('/api/seller?id=' + this.seller.id).then((response) => {
          response = response.body;
          if (response.errno === ERR_OK) {
//          this.seller = response.data;
//          扩展属性同时不影响id
            this.seller = Object.assign({}, this.seller, response.data);
          }
        });
      }
    }, */
    components: {
//      tabs
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>

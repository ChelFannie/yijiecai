<template>
  <div class="foot-nav-containner">
    <tabbar>
      <tabbar-item selected link="/">
        <span slot="label">
          <span class="home_active">icon</span>
          <br/>
          <span>首页</span>
        </span>
      </tabbar-item>
      <tabbar-item show-dot link="/hall">
        <span slot="label">
          <span class="home_active">icon</span>
          <br/>
          <span>大厅</span>
        </span>
      </tabbar-item>
      <tabbar-item link="/orders">
        <span slot="label">
          <span class="home_active">icon</span>
          <br/>
          <span>跟单</span>
        </span>
      </tabbar-item>
      <tabbar-item badge="2" link="/mine">
        <span slot="label">
          <span class="home_active">icon</span>
          <br/>
          <span>我的</span>
        </span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'
export default {
  name: 'footNav',
  components: {
    Tabbar,
    TabbarItem
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App112312323'
    }
  }
}
</script>

<style lang="less">
 .foot-nav-containner {
    position: fixed;
    width: 100%;
    height:98px;
    bottom: 0;
    list-style: none;
    text-decoration: none;
    .weui-tabbar{
      position: fixed;
      height:98px;
      .weui-tabbar__item{
        height: 98px;
        .weui-tabbar__label{
          margin: 0;
          font-size: 12px;/* no */
        }
      }
    }
    .weui-tabbar {
      position: fixed;
      bottom: 0;
    }
  }
</style>

<template>
  <div class="home">
    <x-header :left-options="{showBack: false}">易捷彩</x-header>
    <swiper
      :list="list"
      auto
      loop
      style="width:100%;"
      height="180px"
      dots-class="custom-bottom"
      dots-position="center"
      :interval=1500
      @on-index-change="onIndexChange"></swiper>
      <swiper auto height="30px" direction="vertical" :interval=2000 class="text-scroll" :show-dots="false">
        <swiper-item>
          <p>义务爱了 完成传奇世界H5-王者归来任务 获得20金币</p>
        </swiper-item>
        <swiper-item>
          <p>基本世神 兑换《传奇世界H5》畅玩级礼包 消耗30金币</p>
        </swiper-item>
        <swiper-item>
          <p>零哥章魚 完成传奇世界H5-王者归来任务 获得30金币</p>
        </swiper-item>
        <swiper-item>
          <p>做迎而為 兑换【饿了么】畅享美食红包 消耗20金币</p>
        </swiper-item>
        <swiper-item>
          <p>只知道不知道 兑换【饿了么】畅享美食红包 消耗20金币</p>
        </swiper-item>
        <swiper-item>
          <p>基本世神 兑换《传奇世界H5》畅玩级礼包 消耗30金币</p>
        </swiper-item>
      </swiper>
      <!-- <group title="竞彩足球">
        <cell v-for="(item, index) in footballList" :key="index" :title="item.title" value-align="left" v-bind="{link: 'home/competitive/football/'+item.router}" is-link>
          <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../../static/images/foot.png">
        </cell>
      </group> -->
      <ul class="football">
        <p class="title">竞彩足球</p>
        <li>
          <router-link v-bind="{to: {name: '胜平负', params:{id:0}}}">
            <img src="../../../static/images/foot.png" alt="">
            <span>胜平负</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{name: '让球胜平负', params:{id:1}}">
            <img src="../../../static/images/foot.png" alt="">
            <span>让球胜平负</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{name: '混合过关', params:{id:2}}">
            <img src="../../../static/images/foot.png" alt="">
            <span>混合过关</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{name: '总进球', params:{id:3}}">
            <img src="../../../static/images/foot.png" alt="">
            <span>总进球</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{name: '比分', params:{id:4}}">
            <img src="../../../static/images/foot.png" alt="">
            <span>比分</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{name: '半全场', params:{id:5}}">
            <img src="../../../static/images/foot.png" alt="">
            <span>半全场</span>
          </router-link>
        </li>
      </ul>
    <foot-nav></foot-nav>
  </div>
</template>

<script>
import footNav from '../../components/foot-nav'
import { Swiper, SwiperItem } from 'vux'
export default {
  name: 'Home',
  components: {
    footNav,
    Swiper,
    SwiperItem
  },
  data () {
    return {
      list: [{
        url: 'javascript:',
        img: '../../../static/images/banner1.png'
      }, {
        url: 'javascript:',
        img: '../../../static/images/banner2.png'
      }],
      footballList: [
        { title: '足球胜平负', router: 'winFlatLoss' },
        { title: '足球让球胜平负', router: 'letwinFlatLoss' },
        { title: '混合过关', router: 'mix' },
        { title: '总进球数', router: 'goals' },
        { title: '比分', router: 'score' },
        { title: '半全场', router: 'halfFull' }
      ],
      footballIdx: -1
    }
  },
  created () {
  },
  methods: {
    onIndexChange (index) {
    }
  }
}
</script>

<style lang="less">
.home {
  .text-scroll {
    border: 1px solid #ddd;
    border-left: none;
    border-right: none;
    p {
      font-size: 12px;
      text-align: center;
      line-height: 30px;
    }
  }
  .vux-cell-bd p {
    margin: 0;
  }
  .football{
    list-style-type: none;
    padding: 0;
    .title{
      margin: 0;
      padding: 20px 30px;
      text-align: left;
      background: #ffffff;
      border-bottom: 1px solid #dadada;
      font-size: 14px;/* no */
    }
    li {
      height:100px;
      line-height: 100px;
      font-size:14px;/* no */
      border-bottom: 1px solid #dadada;
      color:#333333;
      background:#ffffff;
      text-align: left;
      a{
        display: block;
        padding: 0 30px;
      }
      img{
        width: 80px;
        height: 80px;
        vertical-align: middle;
      }
      span {
        margin-left: 20px;
        color: #333333;
        vertical-align: middle;
      }
    }
  }
}

</style>

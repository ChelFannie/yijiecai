<template>
    <div class="football">
      <div class="top">
        <x-header title="slot:overwrite-title" @on-click-back="goback"  :left-options="{preventGoBack: 'false'}">
          <div class="overwrite-title-demo" slot="overwrite-title">
            <button-tab>
              <button-tab-item selected>A</button-tab-item>
              <button-tab-item>B</button-tab-item>
            </button-tab>
          </div>
        </x-header>
        <scroller lock-y :scrollbar-x=false ref="scrollerEvent">
          <div class="box1">
            <div class="box1-item" v-for="(item, index) in playArr" :key="index" :class="{selected: selectedIdx == index}" @click="jump(index)">
              <span>{{' ' + item.label + ' '}}</span>
            </div>
          </div>
        </scroller>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
      <div class="bottom">
        <flexbox :gutter="0">
          <flexbox-item :span="1/6">
            <div class="flex-demo">
              <x-button type="warn">删除</x-button>
            </div>
          </flexbox-item>
          <flexbox-item>
            <div class="flex-demo">
              <span>已选<span>0</span>场</span>
            </div>
          </flexbox-item>
          <flexbox-item :span="1/3">
            <div class="flex-demo">至少选择两场</div>
          </flexbox-item>
        </flexbox>
      </div>
    </div>
</template>
<script>
import { ButtonTabItem } from 'vux'
export default {
  name: 'football',
  components: {
    ButtonTabItem
  },
  data () {
    return {
      playArr: [
        { label: '胜平负', router: 'winFlatLoss' },
        { label: '让球胜平负', router: 'letwinFlatLoss' },
        { label: '混合过关', router: 'mix' },
        { label: '总进球', router: 'goals' },
        { label: '比分', router: 'score' },
        { label: '半全场', router: 'halfFull' }],
      selectedIdx: -1
    }
  },
  mounted () {
    if (this.$route.params.id !== undefined) {
      this.selectedIdx = this.$route.params.id
      localStorage.setItem('selectedIdx', JSON.stringify(this.selectedIdx))
    } else {
      this.selectedIdx = JSON.parse(localStorage.getItem('selectedIdx'))
    }
    this.$nextTick(() => {
      this.$refs.scrollerEvent.reset({ left: this.selectedIdx * 43 })
    })
  },
  methods: {
    goback () {
      this.$router.push('/home')
    },
    jump (index) {
      this.$router.push({path: this.playArr[index].router})
      this.selectedIdx = index
      localStorage.setItem('selectedIdx', JSON.stringify(this.selectedIdx))
    }
  }
}
</script>

<style lang="less" scoped>
.top{
  height: 100px;
  position: fixed;
  top: 0;
  z-index: 10;
  background: #fff;
}
.content{
  position: relative;
  height: 100%;
  padding: 100px 0;
}
.overwrite-title-demo {
  margin-top: 5px;
  width: 60%;
  margin-left: 50px;
}
.vux-header {
  padding: 0.08rem 0;
}
.box1 {
  height: 100px;
  position: relative;
  width: 1280px;
}
.box1-item {
  width: 200px;
  height: 100px;
  background-color: #ccc;
  display:inline-block;
  margin-left: 15px;
  float: left;
  text-align: center;
  line-height: 100px;
}
.box1-item:first-child {
  margin-left: 0;
}
.box1-item.selected{
  background: #d3233c;
  color: #fff;
}
.bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: #fff;
}
.flex-demo {
  text-align: center;
  color: #000;
  /* background-color: #20b907; */
  border-radius: 4px;
  background-clip: padding-box;
}
</style>

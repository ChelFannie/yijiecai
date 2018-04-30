<template>
  <div>
    <x-header id="head" :left-options="{showBack: false}">乐得瑞</x-header>
    {{msg}}
    <button @click="login">登陆</button>
    <button @click="getUserInfo">得到个人信息</button>
    <foot-nav></foot-nav>
  </div>
</template>

<script>
import footNav from '../../components/foot-nav'
// import axios from 'axios'
export default {
  name: 'mine',
  components: {
    footNav
  },
  data () {
    return {
      msg: '我的'
    }
  },
  methods: {
    login () {
      this.$router.push({name: '登陆'})
    },
    getUserInfo () {
      this.$router.push({name: '个人信息'})
    }
  }
}
</script>

<style>

</style>

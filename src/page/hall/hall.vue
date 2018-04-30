<template>
  <div>
    <x-header id="head" :left-options="{showBack: false}">乐得瑞</x-header>
    {{msg}}
       <li>
        <router-link to="/hall/hall_item">大厅子路由</router-link>
        <!-- <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a> -->
      </li>
       <li>
        <router-link to="/home/WinFlatLoss">胜平负</router-link>
      </li>
      <foot-nav></foot-nav>
  </div>
</template>

<script>
import footNav from '../../components/foot-nav'
export default {
  name: 'hall',
  components: {
    footNav
  },
  data () {
    return {
      msg: '大厅'
    }
  }
}
</script>

<style>

</style>

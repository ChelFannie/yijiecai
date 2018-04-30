<template>
  <div>
    <x-header id="head" :left-options="{showBack: false}">乐得瑞</x-header>
    {{msg}}
    <foot-nav></foot-nav>
  </div>
</template>

<script>
import footNav from '../../components/foot-nav'
export default {
  name: 'orders',
  components: {
    footNav
  },
  data () {
    return {
      msg: '跟单'
    }
  }
}
</script>

<style>

</style>

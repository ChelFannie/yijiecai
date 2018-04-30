<template>
  <div class="son">
        <h3>test-slot</h3>
        <div class="two">
            <slot name="two">子组件第二个插槽</slot>
        </div>
        <div class="one">
            <slot name="one">子组件的第一个插槽</slot>
        </div>
        <slot>123sdfsfsdsd</slot>
  </div>
</template>
<script>
export default {
  name: 'son',
  data () {
    return {
      msg: '胜平负'
    }
  }
}
</script>
<style scoped>

</style>

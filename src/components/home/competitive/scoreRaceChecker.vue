<template>
  <div>
  </div>
</template>
<script>
import scoreSelect from './scoreSelect'
export default {
  name: 'scoreRaceChecker',
  props: {
    data: Array
  },
  components: {
    scoreSelect
  },
  data () {
    return {
      checkArr: [],
      // 保存选择的全部数据
      selectData: [],
      // 记录当前的玩法
      footBallId: -1,
      show: false,
      dataInfo: {},
      selectOneData: {}
    }
  },
  watch: {

  },
  created () {
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
</style>

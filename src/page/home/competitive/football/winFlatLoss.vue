<template>
  <div>
    <win-flat-loss-select v-if="show" :data="data" :betDataObj="betDataObj"></win-flat-loss-select>
  </div>
</template>

<script>
import winFlatLossSelect from '../../../../components/home/competitive/winFlatLossSelect'
import Tidy from '../../../../utils/tidy.js'
export default {
  name: 'winFlatLoss',
  components: {
    winFlatLossSelect
  },
  data () {
    return {
      data: [],
      show: false,
      betDataObj: {
        lotteryType: '51',
        subPlayType: '51',
        type: '',
        selectData: []
      }
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$ajax.get('matchData').then(res => {
        if (res.data.code === '00000') {
          res.data.data.matchData.map(_dataItem => {
            _dataItem.matchInfo.map(_infoItem => {
              _infoItem.stopSaleTime = _infoItem.stopSaleTime.substring(11).substring(5, -3)
              _infoItem.odds.s51 && Tidy.winFlatLoss(_infoItem)
              _infoItem.odds.s52 && Tidy.score(_infoItem)
              _infoItem.odds.s53 && Tidy.goals(_infoItem)
              _infoItem.odds.s54 && Tidy.halfFull(_infoItem)
              _infoItem.odds.s56 && Tidy.letwinFlatLoss(_infoItem)
            })
            this.data = res.data.matchData
            this.show = true
          })
        }
        this.data = res.data.data.matchData
      })
    }
  }
}
</script>

<style>

</style>

<template>
  <div>
    <group v-for="(item, index) in data" :key="index">
      <cell
        :title="`${item.time}  共${item.times}场比赛可投`"
        is-link
        :border-intent="false"
        :arrow-direction="showContentItem[index] ? 'up' : 'down'"
        @click.native="showContent(index)"
        value-align="center"
        v-if="item.matchInfo.length"></cell>
      <template v-if="showContentItem[index]">
        <group v-for="val in item.matchInfo" :key="val.matchUniqueId">
          <flexbox>
            <flexbox-item :span="4">
              <div class="flex-demo">
                <span>{{val.leagueName}}</span><br>
                <span>{{val.matchTimes}}</span><br>
                <span>{{val.stopSaleTime}}截至</span>
              </div>
            </flexbox-item>
            <flexbox-item>
              <div class="flex-demo">
                <checker v-model="demo22" type="checkbox" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
                  <checker-item :value="item" v-for="(item, index) in items1" :key="index">{{item.value}}</checker-item>
                </checker>
                <br>
                <span>当前值: {{demo22}}</span>
              </div>
            </flexbox-item>
          </flexbox>
        </group>
      </template>
    </group>
  </div>
</template>
<script>
export default {
  name: 'winFlatLossSelect',
  props: {
    data: Array,
    betDataObj: Object
  },
  data () {
    return {
      // 保存折叠面板的数据
      showContentItem: [],
      demo22: [{ key: '2', value: 'B' }],
      items1: [{
        key: '1',
        value: 'A'
      }, {
        key: '2',
        value: 'B'
      }, {
        key: '3',
        value: 'C'
      }]
    }
  },
  watch: {
  },
  mounted () {
    console.log(this.data)
    console.log(this.betDataObj)
  },
  methods: {
    showContent (index) {
      this.$set(this.showContentItem, index, !this.showContentItem[index])
    }
  }
}
</script>
<style lang="less" scoped>
.flex-demo {
  text-align: center;
  color: #000;
  /* background-color: #20b907; */
  border-radius: 4px;
  background-clip: padding-box;
}
.demo1-item {
  border: 1px solid #ececec;
  padding: 5px 15px;
}
.demo1-item-selected {
  border: 1px solid green;
}
</style>

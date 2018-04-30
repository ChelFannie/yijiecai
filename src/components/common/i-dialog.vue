<template>
  <div>
    <x-dialog :show.sync="show" class="dialog">
      <div class="content">
        <slot name="content"></slot>
        <slot></slot>
      </div>
      <div class="bottom" v-if="single">
        <li class="left" @click="handlerClose">取消</li>
        <li class="right" @click="handlerPrimary">确定</li>
      </div>
      <div class="bottom1" v-if="!single">
        <li @click="handlerPrimary">确定</li>
      </div>
    </x-dialog>
  </div>
</template>
<script>
import { XDialog, Flexbox } from 'vux'
export default {
  name: 'iDialog',
  props: {
    // show: {
    //   type: Boolean,
    //   default: false
    // },
    value: Boolean,
    single: {
      type: Boolean,
      default: true
    }
  },
  components: {
    XDialog,
    Flexbox
  },
  data () {
    return {
      show: this.value
    }
  },
  watch: {
    value (value) {
      this.show = value
    }
  },
  created () {
    console.log(this.single)
  },
  methods: {
    handlerClose () {
      this.$emit('close')
    },
    handlerPrimary () {
      this.$emit('confirm')
      this.$emit('close')
    }
  }
}
</script>
<style lang="less" scoped>
.content {
  min-height: 150px;
  padding-top: 10px;
  width: 600px;
}
.bottom {
  width: 100%;
  height: 80px;
  border-top: 1px solid #e7e7e7;
  line-height: 80px;
  font-size: 16px; /*no*/
  li {
    float: left;
  }
  .left {
    width: 49.5%;
    color: #353535;
  }
  .right {
    width: 50%;
    border-left: 0.5px solid #ccc;
    color: #ff9900;
  }
}
.bottom1 {
  width: 100%;
  height: 80px;
  border-top: 1px solid #e7e7e7;
  line-height: 80px;
  font-size: 16px; /*no*/
  border-left: 0.5px solid #ccc;
  color: #ff9900;
}
</style>

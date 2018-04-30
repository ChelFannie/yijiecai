<template>
  <div>{{msg}}
      <img :src="imgSrc" class="img">
  </div>
</template>

<script>
export default {
  name: 'userInfo',
  data () {
    return {
      msg: '个人信息',
      imgSrc: ''
    }
  },
  created () {
    this.getUserInfo()
  },
  methods: {
    getUserInfo () {
      this.$ajax.get('/member/info.json')
        .then(res => {
          console.log(res)
          this.imgSrc = res.data.data.headImages
        })
    }
  }
}
</script>

<style>
.img{
    width: 100px;
    height: 100px;
}
</style>

<template>
  <div class="login">
    <x-header title="slot:overwrite-title" :left-options="{showBack: true, preventGoBack:true}" @on-click-back="goBack">乐得瑞</x-header>
    <group>
      <x-input
       title="姓名"
       v-model="userName"
       ref="userName"
       required
       placeholder="请输入用户名或手机号"
       :is-type="userNameCheck"
       >
      </x-input>
    </group>
    <group>
      <x-input title="密码" v-model="form.password" ref="passWord" placeholder="请输入密码" :type="type" :is-type="passwordCheck">
        <x-button slot="right" type="primary" mini @click.native="togglePwd">切换</x-button>
      </x-input>
    </group>
    <group class="loginGroup">
      <x-button type="primary" class="loginBtn" @click.native="login">登陆</x-button>
    </group>
    <flexbox class="register">
      <flexbox-item><div class="left">没有账号? 立马<span class="reg" @click="register"> 注册 </span></div></flexbox-item>
      <flexbox-item><div class="right" @click="forgetPwd">忘记密码</div></flexbox-item>
    </flexbox>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    let userNameCheck = (value) => {
      let flag = true
      const userNameReg = /^[\u4E00-\u9FA5a-zA-Z0-9_]{4,16}$/
      !userNameReg.test(value) && (flag = false)
      return {
        valid: flag,
        msg: '仅允许4-16位的字符，汉字、字母、数字、下划线'
      }
    }
    let passwordCheck = (value) => {
      let flag = true
      const loginPwdReg = /^(\w){6,18}$/
      !loginPwdReg.test(value) && (flag = false)
      return {
        valid: flag,
        msg: '仅允许6~18位字符，可以是字母、数字和下划线'
      }
    }

    // data数据
    return {
      msg: '登陆页面',
      userNameCheck: userNameCheck,
      passwordCheck: passwordCheck,
      userName: '',
      form: {
        memberName: '',
        mobile: '',
        password: ''
      },
      type: 'password',
      checkValid: ['userName', 'passWord']
    }
  },
  created () {
    // console.log(this.$route.query)
  },
  methods: {
    login () {
      if (this.form.password === '' || this.userName === '') {
        this.$vux.toast.show({
          text: '请填写完整信息',
          type: 'text',
          position: 'middle'
        })
        return
      }
      let checkData = this.checkValid.filter(val => !this.$refs[val].valid)
      if (!checkData.length) {
        let mobileReg = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/
        this.form.mobile = ''
        this.form.memberName = ''
        mobileReg.test(this.userName) ? this.form.mobile = this.userName : this.form.memberName = this.userName
        this.$ajax.post('/member/login.json', this.form)
          .then(res => {
            if (res.data.code === '00000') {
              this.$store.commit('token', res.data.token)
              localStorage.setItem('token', res.data.token)
              this.$route.query.redirect === undefined
                ? this.$router.push({path: '/'})
                : this.$router.push({path: this.$route.query.redirect})
            } else if (res.data.code === '10001') {
              this.$vux.toast.show({
                text: res.data.msg,
                type: 'warn',
                position: 'middle'
              })
            }
          })
      } else {
        this.$vux.toast.show({
          text: '请填写完整信息',
          type: 'text',
          position: 'middle'
        })
      }
    },
    // 切换密码输入框的方式
    togglePwd () {
      this.type = this.type === 'password' ? 'text' : 'password'
    },
    goBack () {
      this.$router.push('/')
    },
    register () {
      this.$router.push({name: '注册'})
    },
    forgetPwd () {
      this.$vux.toast.show({
        text: '此功能暂未开发',
        type: 'text',
        position: 'middle'
      })
    }
  }
}
</script>

<style lang="less">
.login {
  .loginGroup {
    width: 50%;
    padding-left: 25%;
    border-radius: 5px;
    .loginBtn {
      width: 100%;
      height: 60px;
    }
  }
  .weui-input {
    font-size: 14px;/*no*/
  }
  .register {
    margin-top: 10px;
    font-size: 14px;/*no*/
    .left {
      padding-left: 10px;
      .reg {
        color: red;
        font-size: 16px;/*no*/
      }
    }
    .right {
      float: right;
      padding-right: 20px;
    }
  }
}

</style>

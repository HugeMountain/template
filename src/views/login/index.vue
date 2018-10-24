<template>
  <div class="login-container">
    <div class="bg-table-line d-flex flex-column align-items-center justify-content-between width-35">
      <div class="my-3">欢迎登录</div>
      <Form ref="form" :model="form" :rules="rule">
        <FormItem label="" prop="username" class="width-30">
          <Input type="password" prefix="ios-contact" v-model="form.username"/>
        </FormItem>
        <FormItem label="" prop="password" class="width-30">
          <Input type="password" prefix="ios-lock-outline" v-model="form.password"/>
        </FormItem>
        <FormItem class="width-30">
          <Button type="primary" class="width-20" @click="handleSubmit('form')">登录</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        passwd: '',
        passwdCheck: '',
        age: ''
      },
      rule: {
        username: [
          { required: true, message: 'The username cannot be empty', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'The password cannot be empty', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$store.commit('setActiveContent', {name: 'view'})
          this.$router.push({name: 'HelloWorld'})
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: #0a69e0;
  font-size: 24px;
  font-weight: bold;
  background: linear-gradient(-180deg, #f2a5e3, #009cda);
  text-align: center;
}
</style>

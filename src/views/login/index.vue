<template>
  <div class="login-container">
    <Form ref="form" :model="form" :rules="rule" :label-width="150">
      <FormItem label="" prop="username" class="width-100">
        <Input type="password" prefix="ios-contact" v-model="form.username"/>
      </FormItem>
      <FormItem label="" prop="password" class="width-100">
        <Input type="password" prefix="ios-lock-outline" v-model="form.password"/>
      </FormItem>
      <FormItem class="width-100">
        <Button type="primary" @click="handleSubmit('form')">Submit</Button>
        <Button @click="handleReset('form')" style="margin-left: 8px">Reset</Button>
      </FormItem>
    </Form>
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
          this.$router.push({name: 'HelloWorld'})
        }
      })
    },
    handleReset (name) {
      this.$refs[name].resetFields()
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
  background-color: #083e5f;
  text-align: center;
}
</style>

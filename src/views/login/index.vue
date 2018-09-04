<template>
  <div class="login-container">
    <Form ref="form" :model="form" :rules="rule" :label-width="80">
      <FormItem label="用户名" prop="username">
        <Input type="password" v-model="form.username"/>
      </FormItem>
      <FormItem label="密码" prop="password">
        <Input type="password" v-model="form.password"/>
      </FormItem>
      <FormItem>
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
          this.$Message.success('Success!')
        } else {
          this.$Message.error('Fail!')
        }
      })
    },
    handleReset (name) {
      this.$refs[name].resetFields()
    }
  }
}
</script>

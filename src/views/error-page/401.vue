<template>
  <div class="full-width full-height">
    <div class="content">
      <!--<img :src="src" alt="我是401">-->
      <div>您没有权限访问此页面.....</div>
    </div>

  </div>
</template>

<script>
// import error401 from '@/assets/images/error-page/401.png'
export default {
  name: 'error_401',
  data () {
    return {
      src: error401
    }
  }
}
</script>

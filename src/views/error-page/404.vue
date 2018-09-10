<template>
  <div>
    <img :src="src" alt="Oh~~您的页面好像飞走了~">
    <div>Oh~~您的页面好像飞走了~</div>
  </div>
</template>

<script>
import error404 from '@/assets/images/error-page/404.png'
export default {
  name: 'error_404',
  data () {
    return {
      src: error404
    }
  }
}
</script>

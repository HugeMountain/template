<template>
  <div class="header-bar">
    <a><Icon type="md-menu" size="26" /></a>
    <bread-crumb></bread-crumb>
  </div>
</template>
<script>
import BreadCrumb from './BreadCrumb'
export default {
  data () {
    return {}
  },
  components: {
    BreadCrumb
  }
}
</script>

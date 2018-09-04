<template>
  <div class="main">
    <div class="left-wrap">
      <left-nav></left-nav>
    </div>
    <div class="content-wrap">
      <div class="bread-crumb">
        <bread-crumb></bread-crumb>
      </div>
      <div class="main-view">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import LeftNav from '@/components/layout/LeftNav.vue'
import BreadCrumb from '@/components/layout/BreadCrumb.vue'
export default {
  components: {
    LeftNav,
    BreadCrumb
  }
}
</script>

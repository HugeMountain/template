<template>
<div class="breadcrumb-container">
  <Breadcrumb class="d-flex justify-content-start">
    <BreadcrumbItem to="{name: 'home'}">首页</BreadcrumbItem>
    <BreadcrumbItem v-for="second in breadcrumbs" :to="{name: second.name}">{{second.meta.title}}</BreadcrumbItem>
  </Breadcrumb>
</div>
</template>
<script>
export default {
  data () {
    return {
      breadcrumbs: []
    }
  },
  methods: {
    getBreadCrumb () {
      console.log(this.$route)
      let paths = this.$route.matched
      this.breadcrumbs = paths.slice(1)
    }
  },
  mounted () {
    this.getBreadCrumb()
  }
}
</script>

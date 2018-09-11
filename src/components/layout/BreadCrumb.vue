<template>
<div class="breadcrumb-container">
  <Breadcrumb class="d-flex justify-content-start">
    <BreadcrumbItem to="{name: 'home'}">首页</BreadcrumbItem>
    <BreadcrumbItem v-for="second in breadcrumbList" :key="second.name" :to="{name: second.name}">{{second.meta.title}}</BreadcrumbItem>
  </Breadcrumb>
</div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    breadcrumbList: {
      get () {
        return this.$store.state.layout.breadcrumbList
      },
      set (newValue) {}
    }
  },
  methods: {
    ...mapState([
      'breadcrumbList'
    ]),
    ...mapMutations([
      'setBreadCrumb'
    ])
  },
  watch: {
    '$route' (newRoute) {
      this.setBreadCrumb(newRoute.matched)
    }
  },
  mounted () {
    // this.$store.commit('setBreadCrumb', this.$route.matched) 或
    this.setBreadCrumb(this.$route.matched)
  }
}
</script>

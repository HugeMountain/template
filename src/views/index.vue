<template>
  <div class="main">
    <Layout class="full-height">
      <Sider hide-trigger collapsible :width="256" :collapsed-width="64" v-model="collapsed">
        <left-nav :collapsed="collapsed">
          <template slot="logo">
            <img width="100%" src="https://icarusion.gitee.io/iview/e1cf12c07bf6458992569e67927d767e.png">
          </template>
        </left-nav>
      </Sider>
      <Layout>
        <Header class="bg-white custom-header">
          <header-bar @handle-collapsed-change="handleCollapsedChange" :collapsed="collapsed">
          </header-bar>
        </Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import LeftNav from '@/components/layout/LeftNav.vue'
import HeaderBar from '@/components/layout/HeaderBar.vue'
export default {
  components: {
    LeftNav,
    HeaderBar
  },
  data () {
    return {
      collapsed: false
    }
  },
  methods: {
    handleCollapsedChange (state) {
      this.collapsed = state
    }
  }
}
</script>
<style lang="less" scoped>
  .main {
    background-color: #fffdfd;
    width: 100%;
    height: 100%;
    .custom-header {
      padding: 0 !important;
    }
  }
</style>

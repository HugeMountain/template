<template>
  <div class="main">
    <Layout class="full-height">
      <Sider hide-trigger collapsible :width="256" :collapsed-width="64" v-model="collapsed">
        <left-nav :collapsed="collapsed">
          <template slot="logo">
            <img width="100%" src="https://icarusion.gitee.io/iview/e1cf12c07bf6458992569e67927d767e.png"
            style="clip:rect(0 140px 0 0)">
          </template>
        </left-nav>
      </Sider>
      <Layout>
        <Header class="bg-white custom-header">
          <header-bar @handle-collapsed-change="handleCollapsedChange" :collapsed="collapsed">
          </header-bar>
        </Header>
        <Content>
          <Layout>
            <div class="tags">
              <tags-nav/>
            </div>
            <div class="content">
              <keep-alive :include="cacheList">
                <router-view></router-view>
              </keep-alive>
            </div>
          </Layout>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import LeftNav from '@/components/layout/LeftNav.vue'
import TagsNav from '@/components/layout/TagsNav.vue'
import HeaderBar from '@/components/layout/HeaderBar.vue'
export default {
  components: {
    LeftNav,
    TagsNav,
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
  },
  computed: {
    tagNavList () {
      return this.$store.state.layout.tagNavList
    },
    cacheList () {
      return this.tagNavList.length ? this.tagNavList.filter(item => !(item.meta && item.meta.notCache)).map(item => item.name) : []
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

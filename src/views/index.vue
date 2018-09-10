<template>
  <div class="main">
    <Layout class="full-height">
      <Sider hide-trigger>
        <left-nav>
          <!-- 需要放在菜单上面的内容，如Logo，写在side-menu标签内部，如下 -->
          <div class="logo-con">
            <img v-if="!collapsed" :src="'@/assets/images/logo.jpg'" key="max-logo" />
            <img v-if="collapsed" :src="'@/assets/images/logo-min.jpg'" key="min-logo" />
          </div>
        </left-nav>
      </Sider>
      <Layout>
        <Header class="bg-white">
          <bread-crumb>

          </bread-crumb>
        </Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import LeftNav from '@/components/layout/LeftNav.vue'
import BreadCrumb from '@/components/layout/BreadCrumb.vue'
export default {
  components: {
    LeftNav,
    BreadCrumb
  },
  data () {
    return {
      collapsed: false
    }
  }
}
</script>
<style>
  .main {
    background-color: #fffdfd;
    width: 100%;
    height: 100%;
  }
</style>

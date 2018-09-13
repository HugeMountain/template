<template>
  <div class="main">
    <Layout class="full-height">
      <Sider hide-trigger>
        <left-nav>
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

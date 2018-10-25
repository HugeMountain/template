<template>
  <div class="header-bar">
    <div class="change-left" @click="changeLeftNav">
      <Icon type="ios-menu" class="text-24" :class="{'rotate': collapsed}"/>
    </div>
    <bread-crumb>
    </bread-crumb>
  </div>
</template>
<script>
import BreadCrumb from './BreadCrumb'
export default {
  props: {
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {}
  },
  components: {
    BreadCrumb
  },
  methods: {
    changeLeftNav () {
      this.$emit('handle-collapsed-change', !this.collapsed)
    }
  }

}
</script>
<style lang="less" scoped>
  .header-bar {
    .change-left {
      display: inline-block;
      width: 60px;
      float: left;
      .rotate {
        transform:rotate(90deg);
        -ms-transform:rotate(90deg);/* IE 9 */
        -moz-transform:rotate(90deg);/* Firefox */
        -webkit-transform:rotate(90deg); /* Safari 和 Chrome */
        -o-transform:rotate(90deg);/* Opera */
      }
    }
  }
</style>

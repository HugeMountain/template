<template>
  <div class="side-menu-wrapper">
    <slot name="logo"></slot>
    <Menu ref="menu" width="auto">
      <!--可用iview导航菜单-->
      <div class="collapse" v-show="!collapsed">
        <collapse-item :menu-list="menuList"></collapse-item>
      </div>
      <div v-show="collapsed" class="border-top">
        <menu-item :menu-list="menuList"></menu-item>
      </div>
    </Menu>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import CollapseItem from './CollapseItem.vue'
import MenuItem from './MenuItem.vue'
export default {
  name: 'LeftNav',
  components: {
    CollapseItem,
    MenuItem
  },
  props: {
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {}
  },
  methods: {},
  computed: {
    ...mapGetters({
      menuList: 'getLeftNavList'
    })
  },
  mounted () {}
}
</script>
<style lang="less" scoped>
  .side-menu-wrapper {
    .ivu-menu-vertical.ivu-menu-light:after {
       background: none !important;
    }
    .collapse {
      background-color: #515a6e;
      border-radius: 3px;
      border-bottom: 1px solid #dcdee2;
      .collapse-item-active {
        background: -webkit-linear-gradient(left, #3a97f7, #515a6e); /* Safari 5.1 to 6.0 */
        background: -o-linear-gradient(left, #3a97f7, #515a6e); /* Opera 11.1 to 12.0 */
        background: -moz-linear-gradient(left, #3a97f7, #515a6e); /* Firefox 3.6 to 15 */
        background: linear-gradient(left, #3a97f7, #515a6e);
      }
    }
    .list-item {
      height: 60px;
      background-color: #515a6e;
      display: flex;
      justify-content: center;
      align-items: center;
      .ivu-dropdown{
        width: 100%;
        .ivu-dropdown-rel a{
          width: 100%;
          color: #d0d5dc;
        }
      }
      .ivu-tooltip {
        width: 100%;
        .ivu-tooltip-rel a{
          width: 100%;
        }
      }
    }
  }
</style>

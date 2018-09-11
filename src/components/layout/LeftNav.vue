<template>
  <div class="side-menu-wrapper">
    <slot></slot>
    <Menu ref="menu" v-show="!collapsed" :active-name="activeName" :open-names="openedNames" :accordion="accordion" :theme="theme" width="auto" @on-select="handleSelect">
      <template v-for="item in menuList">
        <template v-if="item.children && item.children.length === 1">
        </template>
        <template v-else>
        </template>
      </template>
    </Menu>
    <div class="menu-collapsed" v-show="collapsed" :list="menuList"></div>
  </div>
</template>
<script>

export default {
  name: 'LeftNav',
  components: {},
  props: {
    menuList: {
      type: Array,
      default () {
        return []
      }
    },
    collapsed: {
      type: Boolean
    },
    activeName: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  },
  methods: {},
  computed: {},
  mounted () {}
}
</script>
<style lang="less">
</style>

<template>
  <div class="side-menu-wrapper">
    <slot></slot>
    <Menu ref="menu" width="auto">
      <template>
        <template>
            <div v-for="(item, index) in menuList" :name="item.name" :key="index">
              <div>{{item.meta.title}}</div>
              <div v-if="item.children">
                <div v-for="(row, i) in item.children" :key="i">
                  {{row.meta.title}}
                </div>
              </div>
             </div>
        </template>
        <!--<template v-else>-->
        <!--</template>-->
      </template>
    </Menu>
    <!--<div class="menu-collapsed" v-show="collapsed" :list="menuList"></div>-->
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  name: 'LeftNav',
  components: {},
  props: {
  },
  data () {
    return {
      collapsed: false
    }
  },
  methods: {
    handleSelect () {
    }
  },
  computed: {
    ...mapGetters({
      menuList: 'getLeftNavList'
    })
  },
  mounted () {}
}
</script>
<style lang="less">
</style>

<template>
  <div class="collapse-block">
    <div class="collapse-item" @click.stop="clickPane(item)" v-for="(item, index) in menus" :key="index" :name="item.name"
         :class="{ 'collapse-item-active':  isActive(item) }">
      <div class="collapse-header">
        <div class="label">
          <span>{{item.meta.title}}</span>
        </div>
        <div class="arrow" v-if="item.hasOwnProperty('open')" @click.stop="clickArrow(item, index)">
          <Icon type="ios-arrow-down" class="text-white" v-if="item.open"/>
          <Icon type="ios-arrow-forward" class="text-white" v-else/>
        </div>
      </div>
      <div class="collapse-content" v-if="item.hasOwnProperty('open') && item.open">
        <div class="collapse-content-box">
            <collapse-block :menu-list="item.children"></collapse-block>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
import { nameContain } from '@/libs/utils'
export default {
  name: 'CollapseBlock',
  components: {},
  props: {
    menuList: Array
  },
  data () {
    return {
      menus: []
    }
  },
  methods: {
    clickPane (first) {
      if (first.children) {
        this.$router.push({name: first.children[0].name})
      } else {
        this.$router.push({name: first.name})
      }
    },
    clickArrow (first, index) {
      this.menus[index].open = !first.open
      this.setLeftNavList(this.menus)
    },
    clickContent (second) {
      this.$router.push({name: second.name})
    },
    isActive (node) {
      return nameContain(node.name, this.active)
    },
    ...mapMutations([
      'setOpenFlag',
      'setLeftNavList'
    ])
  },
  computed: {
    ...mapGetters({
      active: 'getActiveContent',
      openFlag: 'getOpenFlag'
    })
  },
  mounted () {
    this.menus = this.menuList
    console.log('menu2', this.menuList)
  }
}
</script>
<style lang="less" scoped>
  .collapse-block {
    background-color: transparent;
    .collapse-item-active {
      background: -webkit-linear-gradient(left, #478cd2, #626e88, #478cd2); /* Safari 5.1 to 6.0 */
      background: -o-linear-gradient(left, #478cd2, #626e88, #478cd2); /* Opera 11.1 to 12.0 */
      background: -moz-linear-gradient(left, #478cd2, #626e88, #478cd2); /* Firefox 3.6 to 15 */
      background: linear-gradient(left, #478cd2, #626e88, #478cd2);
    }
    .collapse-item {
      .collapse-header {
        height: 21px;
        line-height: 21px;
        color: #666;
        cursor: pointer;
        position: relative;
        -webkit-transition: all .2s ease-in-out;
        transition: all .2s ease-in-out;
        .arrow {
          color: #141414;
          cursor: pointer;
          display: inline-block;
          height: 100%;
          position: absolute;
          right: 0px;
          top: 0px;
          width: 25px;
          i {
            transition: transform .2s ease-in-out, -webkit-transform .2s ease-in-out;
            margin-right: 14px;
          }
        }
      }
      .collapse-content {
        color: #515a6e;
        padding: 0;
        background-color: #626e88;
        .collapse-content-box {
          padding-top: 16px;
          padding-bottom: 16px;
          .active-content {
            background: -webkit-linear-gradient(left, #478cd2, #626e88, #478cd2); /* Safari 5.1 to 6.0 */
            background: -o-linear-gradient(left, #478cd2, #626e88, #478cd2); /* Opera 11.1 to 12.0 */
            background: -moz-linear-gradient(left, #478cd2, #626e88, #478cd2); /* Firefox 3.6 to 15 */
            background: linear-gradient(left, #478cd2, #626e88, #478cd2);
          }
        }
      }
    }
    .label {
      color: #dce1e8;
      &:hover {
        color: #fff;
      }
    }
  }
</style>

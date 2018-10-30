<template>
  <div>
    <div class="collapse-item" @click.stop="clickPane(item)" v-for="(item, index) in menuList" :key="index" :name="item.name"
         :class="{ 'collapse-item-active':  isActive(item) }">
      <div class="collapse-header">
        <div class="d-inline-block fl label">
          <Icon :type="item.meta.icon"/>
          <span>{{item.meta.title}}</span>
        </div>
        <div class="text-black fr cursor-pointer d-inline-block full-height" v-if="item.children && item.children.length > 0" style="width: 25px" @click.stop="clickArrow(item)">
          <Icon type="ios-arrow-down" class="text-white" v-if="isOpen(item)"/>
          <Icon type="ios-arrow-forward" class="text-white" v-else/>
        </div>
      </div>
      <div class="collapse-content" v-if="item.children && item.children.length > 0 && isOpen(item)">
        <div class="collapse-content-box">
            <collapse-block :menu-list="item.children"></collapse-block>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
import { nameContain, willOpen } from '@/libs/utils'
import CollapseBlock from './CollapseBlock.vue'
export default {
  name: 'CollapseItem',
  components: {
    CollapseBlock
  },
  props: {
    menuList: Array
  },
  data () {
    return {}
  },
  methods: {
    clickPane (first) {
      this.setOpenFlag(true)
      if (first.children) {
        this.$router.push({name: first.children[0].name})
      } else {
        this.$router.push({name: first.name})
      }
    },
    clickArrow (first) {
      this.setOpenFlag(!this.openFlag)
    },
    clickContent (second) {
      this.$router.push({name: second.name})
    },
    isActive (node) {
      return nameContain(node.name, this.active)
    },
    isOpen (first) {
      return nameContain(first.name, this.active) && this.openFlag
    },
    ...mapMutations([
      'setOpenFlag'
    ])
  },
  computed: {
    ...mapGetters({
      active: 'getActiveContent',
      openFlag: 'getOpenFlag'
    })
  },
  mounted () {
    console.log('menu1', this.menuList)
    if (willOpen(this.active)) {
      this.setOpenFlag(true)
    }
  }
}
</script>
<style lang="less" scoped>
  .side-menu-wrapper {
    .label {
      color: #dce1e8;
      &:hover {
        color: #fff;
      }
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
      .collapse-item {
        border-top: 1px solid #dcdee2;
        .collapse-header {
          height: 38px;
          line-height: 38px;
          padding-left: 16px;
          color: #666;
          cursor: pointer;
          position: relative;
          border-bottom: 1px solid transparent;
          -webkit-transition: all .2s ease-in-out;
          transition: all .2s ease-in-out;
          i {
            transition: transform .2s ease-in-out, -webkit-transform .2s ease-in-out;
            margin-right: 14px;
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
    }
  }
</style>

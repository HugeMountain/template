<template>
  <div class="side-menu-wrapper">
    <slot name="logo"></slot>
    <Menu ref="menu" width="auto">
      <!--可用iview导航菜单-->
      <div class="collapse" v-show="!collapsed">
        <div class="collapse-item" @click.stop="clickPane(item)" v-for="(item, index) in menuList" :key="index" :name="item.name" :class="{ 'collapse-item-active':  isActiveFirst(item) }">
          <div class="collapse-header">
            <div class="d-inline-block fl">
              <Icon :type="item.meta.icon" class="text-white"/>
              <span class="text-white">{{item.meta.title}}</span>
            </div>
            <div class="text-black fr cursor-pointer d-inline-block full-height" style="width: 25px" @click.stop="clickArrow(item)">
              <Icon type="ios-arrow-forward" class="text-white" v-if="item.children && !isOpen(item)"/>
              <Icon type="ios-arrow-down" class="text-white" v-if="item.children && isOpen(item)"/>
            </div>
          </div>
          <div class="collapse-content" v-if="item.children && isOpen(item)">
            <div class="collapse-content-box">
              <div v-for="(row, i) in item.children" :key="i" @click.stop="clickContent(row)" class="cursor-pointer text-white"
                   :class="{'active-content': isActiveSecond(row)}">
                {{row.meta.title}}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="collapsed">
        <div v-for="(item, index) in menuList" :key="index" :name="item.name" class="list-item">
          <Tooltip :content="item.meta.title" placement="right" v-if="!item.children">
            <a class="text-white" @click="clickIcon(item)"><Icon :type="item.meta.icon" class="text-white text-24"/></a>
          </Tooltip>
          <Dropdown @on-click="onclickItem" v-else placement="right-start" transfer>
            <a><Icon :type="item.meta.icon" @click.stop="clickIcon(item)" class="text-white text-24"/></a>
            <DropdownMenu slot="list" class="drop-down-menu">
              <DropdownItem v-for="(row, i) in item.children" :name="row.name" :key="i">{{row.meta.title}}</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </Menu>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  name: 'LeftNav',
  components: {},
  props: {
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {}
  },
  methods: {
    onclickItem (name) {
      this.setActiveContent(name)
      this.$router.push({name: name})
    },
    clickIcon (first) {
      if (first.children) {
        this.setActiveContent(first.children[0].name)
        this.$router.push({name: first.children[0].name})
      } else {
        this.setActiveContent(first.name)
        this.$router.push({name: first.name})
      }
    },
    clickPane (first) {
      this.setOpenFlag({activeOpen: first.name, isOpen: true})
      if (first.children) {
        this.setActiveContent(first.children[0].name)
        this.$router.push({name: first.children[0].name})
      } else {
        this.setActiveContent(first.name)
        this.$router.push({name: first.name})
      }
    },
    clickArrow (first) {
      this.setOpenFlag({activeOpen: first.name, isOpen: !this.openFlag.isOpen})
    },
    clickContent (second) {
      this.setActiveContent(second.name)
      this.$router.push({name: second.name})
    },
    isActiveFirst (first) {
      return this.active.activeFirst === first.name || (first.children && this.active.activeSecond === first.children[0].name)
    },
    isActiveSecond (second) {
      return this.active.activeSecond === second.name
    },
    isOpen (first) {
      return this.openFlag.activeOpen === first.name && this.openFlag.isOpen
    },
    ...mapMutations([
      'setActiveContent',
      'setOpenFlag'
    ])
  },
  watch: {
    collapsed () {
      console.log(this.collapsed)
    }
  },
  computed: {
    ...mapGetters({
      menuList: 'getLeftNavList',
      active: 'getActiveContent',
      openFlag: 'getOpenFlag'
    })
  },
  mounted () {}
}
</script>
<style lang="less" scoped>
  .side-menu-wrapper {
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
        }
      }
      .ivu-select-dropdown {
        width: 120px !important;
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

<template>
  <div>
    <div v-for="(item, index) in menuList" :key="index" :name="item.name" class="list-item">
      <Tooltip :content="item.meta.title" placement="right" v-if="!item.children">
        <a class="text-white" @click="clickIcon(item)"><Icon :type="item.meta.icon" class="text-24"/></a>
      </Tooltip>
      <Dropdown @on-click="onclickItem" v-else placement="right-start" transfer>
        <a><Icon :type="item.meta.icon" @click.stop="clickIcon(item)" class="text-white text-24"/></a>
        <DropdownMenu slot="list" class="drop-down-menu">
          <DropdownItem v-for="(row, i) in item.children" :name="row.name" :key="i">{{row.meta.title}}</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  </div>
</template>
<script>

export default {
  name: 'LeftNav',
  components: {},
  props: {
    menuList: Array
  },
  data () {
    return {}
  },
  methods: {
    onclickItem (name) {
      this.$router.push({name: name})
    },
    clickIcon (first) {
      if (first.children) {
        this.$router.push({name: first.children[0].name})
      } else {
        this.$router.push({name: first.name})
      }
    }
  },
  computed: {},
  mounted () {}
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

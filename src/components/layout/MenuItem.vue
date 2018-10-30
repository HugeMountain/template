<template>
  <div>
    <div v-for="(item, index) in menuList" :key="index" :name="item.name" class="list-item">
      <Tooltip :content="item.meta.title" placement="right" v-if="!item.children">
        <a class="text-white" @click="clickIcon(item)"><Icon :type="item.meta.icon" class="text-24"/></a>
      </Tooltip>
      <dropdown-block v-else :menu="item" :show-icon="true"></dropdown-block>
    </div>
  </div>
</template>
<script>
import DropdownBlock from './DropdownBlock.vue'
export default {
  name: 'MenuItem',
  components: {
    DropdownBlock
  },
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
      .ivu-tooltip {
        width: 100%;
        .ivu-tooltip-rel a{
          width: 100%;
        }
      }
    }
  }
</style>

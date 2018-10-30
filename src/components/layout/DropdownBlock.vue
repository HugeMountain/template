<template>
  <div class="dropdown-block">
    <Dropdown @on-click="onclickItem" placement="right-start" transfer>
      <a @click.stop="clickIcon(menu)" class="text-black">
        <Icon :type="menu.meta.icon" v-if="showIcon" class="text-white text-24"/>
        <span class="" v-else><span>{{menu.meta.title}}</span><Icon type="ios-arrow-forward" class="fr line-height-20"/></span>
      </a>
      <DropdownMenu slot="list" class="drop-down-menu">
        <DropdownItem v-for="(item, i) in menu.children" :name="item.name" :key="i">
        <span v-if="!item.children">
          {{item.meta.title}}
        </span>
          <dropdown-block v-else :menu="item" :show-icon="false"></dropdown-block>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>
<script>

export default {
  name: 'DropdownBlock',
  components: {},
  props: {
    menu: Object,
    showIcon: Boolean
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
  mounted () {
    console.log(this.menu)
  }
}
</script>
<style lang="less" scoped>
  .ivu-dropdown-item {
    width: 100% !important;
  }
  .dropdown-block {
    width: 100%;
    .ivu-dropdown{
      width: 100%;
      .ivu-dropdown-rel a{
        width: 100%;
        color: #d0d5dc;
      }
    }
  }
</style>

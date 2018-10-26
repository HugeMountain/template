<template>
  <div class="tags-nav">
    <ul v-show="visible" :style="{left: contextMenuLeft + 'px', top: contextMenuTop + 'px'}" class="contextmenu">
      <li v-for="(item, key) of closeOption" @click="handleContextClick(key)" :key="key">{{item}}</li>
    </ul>
    <div class="btn-con left-btn">
      <Button type="text" @click="handleScroll(240)">
        <Icon :size="18" type="ios-arrow-back" />
      </Button>
    </div>
    <div class="btn-con right-btn">
      <Button type="text" @click="handleScroll(-240)">
        <Icon :size="18" type="ios-arrow-forward" />
      </Button>
    </div>
    <div class="scroll-outer" ref="scrollOuter" @DOMMouseScroll="handleMouseScroll" @mousewheel="handleMouseScroll">
      <div ref="scrollBody" class="scroll-body" :style="{left: tagBodyLeft + 'px'}">
        <transition-group name="taglist-moving-animation">
          <Tag :title="item.showTitle"
            type="dot"
            v-for="(item, index) in tagNavList"
            ref="tagsPageOpened"
            :key="`tag-nav-${index}`"
            :name="item.name"
            @on-close="handleClose(item, index)"
            @click.native="handleClick(item)"
            :closable="item.name !== 'home'"
            :color="isCurrentTag(item) ? 'primary' : 'default'"
            @contextmenu.prevent.native="contextMenu(item, $event)"
          >{{ item.meta.title }}</Tag>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>

import { mapMutations } from 'vuex'
import _cloneDeep from 'lodash/cloneDeep'
export default {
  name: 'TagsNav',
  props: {},
  data () {
    return {
      tagBodyLeft: 0,
      rightOffset: 40,
      outerPadding: 4,
      contextMenuLeft: 0,
      contextMenuTop: 0,
      visible: false,
      closeOption: {
        others: '关闭其他',
        all: '关闭所有'
      }
    }
  },
  computed: {
    tagNavList () {
      return this.$store.state.layout.tagNavList
    }
  },
  methods: {
    handleMouseScroll (e) {
      let type = e.type
      let delta = 0
      if (type === 'DOMMouseScroll' || type === 'mousewheel') {
        delta = (e.wheelDelta) ? e.wheelDelta : -(e.detail || 0) * 40
      }
      this.handleScroll(delta)
    },
    handleScroll (offset) {
      const outerWidth = this.$refs.scrollOuter.offsetWidth
      const bodyWidth = this.$refs.scrollBody.offsetWidth
      if (offset > 0) {
        this.tagBodyLeft = Math.min(0, this.tagBodyLeft + offset)
      } else {
        if (outerWidth < bodyWidth) {
          if (!(this.tagBodyLeft < -(bodyWidth - outerWidth))) {
            this.tagBodyLeft = Math.max(this.tagBodyLeft + offset, outerWidth - bodyWidth)
          }
        } else {
          this.tagBodyLeft = 0
        }
      }
    },
    handleContextClick (type) {
      if (type === 'all') {
        let res = this.tagNavList.filter(item => item.name !== 'home')
        this.removeTagNavList(res)
        this.$router.push({name: 'home'})
      } else if (type === 'others') {
        let res = this.tagNavList.filter(item => !(this.$route.name === item.name || item.name === 'home'))
        this.removeTagNavList(res)
      }
    },
    handleClose (current, index) {
      let navList = _cloneDeep(this.tagNavList)
      this.removeTagNavList([current])
      if (this.$route.name === current.name) {
        let next = navList.length - 1 === index ? navList[index - 1] : navList[index + 1]
        this.$router.push({name: next.name})
      }
    },
    handleClick (item) {
      this.$router.push({name: item.name})
    },
    isCurrentTag (item) {
      return this.$route.name === item.name
    },
    moveToView (tag) {
      const outerWidth = this.$refs.scrollOuter.offsetWidth
      const bodyWidth = this.$refs.scrollBody.offsetWidth
      if (bodyWidth < outerWidth) {
        this.tagBodyLeft = 0
      } else if (tag.offsetLeft < -this.tagBodyLeft) {
        // 标签在可视区域左侧
        this.tagBodyLeft = -tag.offsetLeft + this.outerPadding
      } else if (tag.offsetLeft > -this.tagBodyLeft && tag.offsetLeft + tag.offsetWidth < -this.tagBodyLeft + outerWidth) {
        // 标签在可视区域
        this.tagBodyLeft = Math.min(0, outerWidth - tag.offsetWidth - tag.offsetLeft - this.outerPadding)
      } else {
        // 标签在可视区域右侧
        this.tagBodyLeft = -(tag.offsetLeft - (outerWidth - this.outerPadding - tag.offsetWidth))
      }
    },
    setView (name) {
      this.$nextTick(() => {
        this.refsTag = this.$refs.tagsPageOpened
        this.refsTag.forEach((item, index) => {
          if (name === item.name) {
            let tag = this.refsTag[index].$el
            this.moveToView(tag)
          }
        })
      })
    },
    contextMenu (item, e) {
      if (item.name === 'home') {
        return
      }
      this.visible = true
      const offsetLeft = this.$el.getBoundingClientRect().left
      this.contextMenuLeft = e.clientX - offsetLeft + 10
      this.contextMenuTop = e.clientY - 64
    },
    closeMenu () {
      this.visible = false
    },
    ...mapMutations([
      'removeTagNavList'
    ])
  },
  watch: {
    '$route' (to) {
      this.setView(to.name)
    },
    visible (value) {
      if (value) {
        document.body.addEventListener('click', this.closeMenu)
      } else {
        document.body.removeEventListener('click', this.closeMenu)
      }
    }
  },
  mounted () {
    this.setView(this.$route.name)
  }
}
</script>

<style lang="less" scoped>
  .no-select{
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .size{
    width: 100%;
    height: 100%;
  }
  .tags-nav{
    position: relative;
    border-top: 1px solid #F0F0F0;
    border-bottom: 1px solid #F0F0F0;
    .no-select;
    .size;
    .close-con{
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      width: 32px;
      background: #fff;
      text-align: center;
      z-index: 10;
    }
    .btn-con{
      position: absolute;
      top: 0px;
      height: 100%;
      background: #fff;
      padding-top: 3px;
      z-index: 10;
      button{
        padding: 6px 4px;
        line-height: 14px;
        text-align: center;
      }
      &.left-btn{
        left: 0px;
      }
      &.right-btn{
        right: 0px;
        border-right: 1px solid #F0F0F0;
      }
    }
    .scroll-outer{
      position: absolute;
      left: 28px;
      right: 28px;
      top: 0;
      bottom: 0;
      box-shadow: 0px 0 3px 2px rgba(100,100,100,.1) inset;
      .scroll-body{
        height: ~"calc(100% - 1px)";
        display: inline-block;
        padding: 1px 4px 0;
        position: absolute;
        overflow: visible;
        white-space: nowrap;
        transition: left .3s ease;
        .ivu-tag-dot-inner{
          transition: background .2s ease;
        }
      }
    }
    .contextmenu {
      position: absolute;
      margin: 0;
      padding: 5px 0;
      background: #fff;
      z-index: 100;
      list-style-type: none;
      border-radius: 4px;
      box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, .3);
      li {
        margin: 0;
        padding: 5px 15px;
        cursor: pointer;
        &:hover {
          background: #eee;
        }
      }
    }
  }

</style>

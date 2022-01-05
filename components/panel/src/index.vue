<template>
  <div class="mdui-panel" :class="{'mdui-panel-popout': popout !== false, 'mdui-panel-gapless': gapless !== false}">
    <slot></slot>
  </div>
</template>
<script>
import {PropItem} from '../../Utils'
import Mixins     from '../../Mixins'

export default {
  name: 'MdPanel',
  mixins: [Mixins],
  props: {
    popout: PropItem(Boolean, false),
    gapless: PropItem(Boolean, false),
    accordion: PropItem(Boolean, false)
  },
  data: function () {
    return {
      eventLabel: 'Panel',
      eventOptionsList: ['accordion']
    }
  },
  methods: {
    open (item) {
      this.__Inst.open(item)
    },
    close (item) {
      this.__Inst.open(item)
    },
    toggle (item) {
      this.__Inst.open(item)
    },
    openAll () {
      this.__Inst.open()
    },
    closeAll () {
      this.__Inst.open()
    }
  }
}
</script>

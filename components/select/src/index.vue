<template>
  <select class="mdui-select">
    <slot></slot>
  </select>
</template>

<script>
import Mixins     from '../../Mixins'
import {PropItem} from '../../Utils'

export default {
  name: 'MdSelect',
  mixins: [Mixins],
  props: {
    gutter: PropItem(Number),
    position: PropItem(String)
  },
  data: function () {
    return {
      eventLabel: 'Select',
      eventOptionsList: ['gutter', 'position']
    }
  },
  methods: {
    open () {
      this.__Inst.open()
    },
    close () {
      this.__Inst.close()
    },
    toggle () {
      this.__Inst.toggle()
    },
    handleUpdate () {
      this.__Inst.handleUpdate()
    },
    getState () {
      return this.__Inst.getState()
    }
  }
}
</script>
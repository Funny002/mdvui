<template>
  <div class="mdui-fab-wrapper">
    <slot name="button">
      <button class="mdui-fab" v-ripple="ripple">
        <slot name="icon">
          <md-icon :name="icon"/>
        </slot>
        <slot name="openIcon">
          <md-icon class="mdui-fab-opened" :name="openIcon"/>
        </slot>
      </button>
    </slot>
    <div class="mdui-fab-dial">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Mixins     from '../../Mixins'
import {PropItem} from '../../Utils'
import MdIcon     from '../../icon/src'
import ripple     from '../../ripple'

export default {
  name: 'MdFab',
  components: {MdIcon},
  mixins: [Mixins],
  props: {
    icon: PropItem(String, false),
    ripple: PropItem(Boolean, false),
    openIcon: PropItem(String, false),
    trigger: PropItem(String, 'hover')
  },
  directives: {
    'ripple': ripple,
    eventOptionsList: ['trigger']
  },
  data: function () {
    return {
      eventLabel: 'Fab'
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
    show () {
      this.__Inst.show()
    },
    hide () {
      this.__Inst.hide()
    },
    getState () {
      return this.__Inst.getState()
    }
  }
}
</script>
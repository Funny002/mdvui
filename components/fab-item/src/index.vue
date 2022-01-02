<template>
  <button class="mdui-fab mdui-fab-mini">
    <slot v-if="$slots.default"></slot>
    <md-icon v-else :name="icon"/>
  </button>
</template>
<script>
import MdIcon     from '../../icon/src'
import {PropItem} from '../../Utils'

export default {
  name: 'MdFabItem',
  components: {MdIcon},
  props: {
    icon: PropItem(String)
  }
}
</script>
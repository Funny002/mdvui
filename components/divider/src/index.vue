<template>
  <div class="mdui-divider" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
import {PropItem} from '../../Utils'

export default {
  name: 'MdDivider',
  props: {
    type: PropItem(String, 'none'),
    inset: PropItem(Boolean, false)
  },
  computed: {
    classes () {
      const {type, inset} = this
      let classes = 'mdui-divider'
      if (inset !== false) classes += '-inset'
      if (['light', 'dark'].includes(type)) {
        return classes + '+' + type
      }
      return ''
    }
  }
}
</script>

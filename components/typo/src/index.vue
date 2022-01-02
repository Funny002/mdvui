<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>
<script>
import {PropItem, Scope} from '../../Utils'

export default {
  name: 'MdType',
  props: {
    size: PropItem(Number),
    opacity: PropItem(Boolean),
    type: PropItem(String, 'none')
  },
  computed: {
    classes () {
      const {type, size = 0, opacity = false} = this
      let classes = `mdui-typo-${type}`
      if ('body' === type && Scope(size, 1, 2)) {
        classes += '-' + size
      } else if ('display' === type && Scope(size, 1, 4)) {
        classes += '-' + size
      }
      if (opacity) classes += '-opacity'
      return classes
    }
  }
}
</script>
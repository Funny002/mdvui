<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>
<script>
import {PropItem} from '../../Utils'

export default {
  name: 'MdTab',
  props: {
    full: PropItem(Boolean, false),
    centered: PropItem(Boolean, false),
    scrollable: PropItem(Boolean, true)
  },
  computed: {
    classes () {
      // full-width
      const classes = []
      return classes.join(' ')
    }
  }
}
</script>

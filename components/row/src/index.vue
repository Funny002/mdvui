<template>
  <div :class="classes">
    <div :class="spanClass">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import {PropItem} from '../../Utils'
import getClass from './Utils'

export default {
  name: 'MdRow',
  props: {
    gapless: PropItem(Boolean),
    grid: PropItem(Boolean, false),
    fluid: PropItem(Boolean, false),
    span: PropItem([String, Object])
  },
  computed: {
    classes () {
      const {grid, fluid} = this
      let classes = 'mdui-container'
      if (fluid !== false) classes += '-fluid'
      if (grid !== false) classes += ' mdui-grid-list'
      return classes
    },
    spanClass () {
      return getClass(this.span, 'row')
    }
  }
}
</script>

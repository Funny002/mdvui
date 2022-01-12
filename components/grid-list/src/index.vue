<template>
  <div class="mdui-grid-tile">
    <slot></slot>
    <div class="mdui-grid-tile-actions" :class="classes">
      <div class="mdui-grid-tile-text">
        <div class="mdui-grid-tile-title">
          <slot name="title">{{ title }}</slot>
        </div>
        <div class="mdui-grid-tile-subtitle" v-if="subtitle">
          <slot name="subtitle">{{ subtitle }}</slot>
        </div>
      </div>
      <div class="mdui-grid-tile-buttons" v-if="$slots.button">
        <slot name="button"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import {PropItem} from '../../Utils'

export default {
  name: 'MdGridList',
  props: {
    title: PropItem(String, ''),
    top: PropItem(Boolean, false),
    subtitle: PropItem(String, ''),
    gradient: PropItem(Boolean, false),
    transparent: PropItem(Boolean, false)
  },
  computed: {
    classes () {
      const classes = []
      const {gradient, transparent, top} = this
      if (top !== false) classes.push('mdui-grid-tile-actions-top')
      if (gradient !== false) classes.push('mdui-grid-tile-actions-gradient')
      if (transparent !== false) classes.push('mdui-grid-tile-actions-transparent')
      return classes.join(' ')
    }
  }
}
</script>

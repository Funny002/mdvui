<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>
<script>
import getClass from '../../row/src/Utils'
import {PropItem} from '../../Utils'

export default {
  name: 'MdCol',
  props: {
    span: PropItem([String, Object]),
    offset: PropItem([String, Object])
  },
  computed: {
    classes () {
      return getClass(this.span, 'col') + getClass(this.offset, 'col-offset', false)
    }
  }
}
</script>
<template>
  <optgroup :label="label">
    <slot></slot>
  </optgroup>
</template>

<script>
import {PropItem} from '../../Utils'

export default {
  name: 'MdSelectOptionGroup',
  props: {
    label: PropItem(String)
  }
}
</script>
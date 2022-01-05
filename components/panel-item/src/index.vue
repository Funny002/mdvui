<template>
  <div class="mdui-panel-item" :class="{'mdui-panel-item-open': open !== false}">
    <div class="mdui-panel-item-header">
      <div class="mdui-panel-item-title">
        <slot name="header" :label="label">{{ label }}</slot>
      </div>
      <template v-if="$slots.summary">
        <slot name="summary"></slot>
      </template>
      <div class="mdui-panel-item-arrow ">
        <i class="mdui-icon material-icons">keyboard_arrow_down</i>
      </div>
    </div>
    <div class="mdui-panel-item-body">
      <slot></slot>
      <div class="mdui-panel-item-actions" v-if="$slots.actions">
        <slot name="actions"></slot>
      </div>
    </div>
  </div>
</template>
<script>
import {PropItem} from '../../Utils'

export default {
  name: 'MdPanelItem',
  props: {
    label: PropItem(String, ''),
    open: PropItem(Boolean, false)
  }
}
</script>

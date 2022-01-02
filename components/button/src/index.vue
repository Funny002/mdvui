<template>
  <button :class="classes" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script>
import {PropItem} from '../../Utils'

export default {
  name: 'MdButton',
  props: {
    // 类型
    type: PropItem(String, 'none'),
    // 密集型按钮
    dense: PropItem(Boolean, false),
    // 是否激活 button-group 生效
    active: PropItem(Boolean, false),
    // 浮动效果
    raised: PropItem(Boolean, false),
    // 禁用
    disabled: PropItem(Boolean, false)
  },
  computed: {
    classes () {
      const classes = ['mdui-btn']
      if (this.dense !== false) classes.push('mdui-btn-dense')
      if (this.raised !== false) classes.push('mdui-btn-raised')
      if (this.active !== false) classes.push('mdui-btn-active')
      if (this.disabled !== false) classes.push('mdui-btn-disabled')
      if (this.type !== 'none') classes.push('mdui-btn-' + this.type)
      return classes
    }
  }
}
</script>
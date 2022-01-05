<template>
  <div class="mdui-textfield" :class="{'mdui-textfield-invalid': error.state, 'mdui-textfield-floating-label': float !== false}">
    <label class="mdui-textfield-label">{{ label }}</label>
    <textarea v-if="type==='textarea'" class="mdui-textfield-input" v-bind="$attrs" v-on="$listeners" @input="__Input"/>
    <input v-else :type="type" class="mdui-textfield-input" v-bind="$attrs" v-on="$listeners" @input="__Input"/>
    <div class="mdui-textfield-error">{{ error.text }}</div>
    <div v-if="helper" class="mdui-textfield-helper">{{ helper }}</div>
  </div>
</template>

<script>
import {PropItem, HasType} from '../../Utils'

export default {
  inheritAttrs: false,
  name: 'MdTextfield',
  model: {prop: 'value', event: 'update'},
  props: {
    value: {},
    rules: PropItem(Function),
    type: PropItem('text'),
    label: PropItem(String, ''),
    helper: PropItem(String, ''),
    float: PropItem(Boolean, false)
  },
  data: function () {
    return {
      error: {
        state: false,
        text: ''
      }
    }
  },
  methods: {
    __Input (event) {
      const value = event.target.value
      this.$emit('update', value)
      // 验证
      if (this.rules) {
        const rules = this.rules(value)
        const callback = error => {
          this.error.text = ''
          this.error.state = HasType(error, 'error')
          if (this.error.state) this.error.text = error.message
        }
        if (rules) {
          if (rules.then) {
            rules.then(callback)
          } else {
            callback(rules)
          }
        }
      }
    }
  }
}
</script>

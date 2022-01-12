<template>
  <label class="mdui-checkbox">
    <input type="checkbox" ref="InputValue" v-bind="$attrs" :checked="getChecked" @change="handleValue"/>
    <i class="mdui-checkbox-icon"/>
    <slot></slot>
  </label>
</template>

<script>
import {PropItem} from '../../Utils'

export default {
  inheritAttrs: false,
  name: 'MdCheckbox',
  model: {prop: 'value', event: 'change'},
  props: {
    value: {},
    onValue: PropItem(undefined, true),
    offValue: PropItem(undefined, false)
  },
  computed: {
    getChecked () {
      return JSON.stringify(this.value) === JSON.stringify(this.onValue)
    },
    _InputValue () {
      return this.value === null ? undefined : JSON.stringify(this.value)
    }
  },
  mounted () {
    // 一致性
    if (![JSON.stringify(this.onValue), JSON.stringify(this.offValue)].includes(JSON.stringify(this.value))) {
      this.$emit('change', this.offValue)
    } else {
      this.setInputValue()
    }
  },
  methods: {
    getInput () {
      return this.$refs.InputValue
    },
    setInputValue () {
      const input = this.getInput()
      if (!input || input.value === this._InputValue) return false
      input.value = this._InputValue
    },
    handleValue (event) {
      if (event.target.checked === this._InputValue) return false
      this.$emit('change', event.target.checked ? this.onValue : this.offValue)
      // 一致性
      this.$nextTick(this.setInputValue)
    }
  }
}
</script>

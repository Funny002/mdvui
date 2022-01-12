<template>
  <label class="mdui-slider" :class="{'mdui-slider-discrete': discrete !== false}">
    <input type="range" ref="InputValue" v-bind="$attrs" :min="min" :max="max" @input="handleInput"/>
  </label>
</template>

<script>
import {PropItem} from '../../Utils'
import mdui       from 'mdui'

export default {
  inheritAttrs: false,
  name: 'MdSlider',
  model: {prop: 'value', event: 'input'},
  props: {
    value: {},
    min: PropItem(Number, 0),
    max: PropItem(Number, 100),
    discrete: PropItem(Boolean, false)
  },
  computed: {
    _InputValue () {
      return this.value === null ? undefined : this.value
    }
  },
  watch: {
    value () {
      this.setInputValue()
      mdui.updateSliders()
    }
  },
  mounted () {
    this.setInputValue()
    mdui.mutation(this.$el)
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
    handleInput (event) {
      if (event.target.value === this._InputValue) return false
      this.$emit('input', event.target.value)
      // 内容一致性
      this.$nextTick(this.setInputValue)
    }
  }
}
</script>

<template>
  <label class="mdui-radio">
    <input type="radio" ref="InputValue" v-bind="$attrs" :checked="getChecked" @change="handleValue"/>
    <i class="mdui-radio-icon"/>
    <slot></slot>
  </label>
</template>

<script>

export default {
  inheritAttrs: false,
  name: 'MdRadio',
  model: {prop: 'value', event: 'change'},
  props: {value: {}, label: {}},
  computed: {
    getChecked () {
      return JSON.stringify(this.value) === JSON.stringify(this.label)
    }
  },
  methods: {
    handleValue (event) {
      if (event.target.checked) {
        this.$emit('change', this.label)
      }
    }
  }
}
</script>

<template>
  <div class="mdui-textfield" :class="classes">
    <template v-if="expandable !== false">
      <button class="mdui-textfield-icon mdui-btn mdui-btn-icon" @click="expandedState = true">
        <slot name="prepend">
          <md-icon :name="prefix"/>
        </slot>
      </button>
      <input class="mdui-textfield-input" :type="type" ref="InputValue" v-bind="$attrs" @focus="handleFocus" @blur="handleBlur" @change="handleChange" @input="handleInput"/>
      <button class="mdui-textfield-close mdui-btn mdui-btn-icon" @click="expandedState = false">
        <slot name="append">
          <md-icon :name="suffix"/>
        </slot>
      </button>
    </template>
    <template v-else>
      <label class="mdui-textfield-label">{{ label }}</label>
      <textarea v-if="type==='textarea'" ref="InputValue" class="mdui-textfield-input" v-bind="$attrs" @focus="handleFocus" @blur="handleBlur" @change="handleChange" @input="handleInput"/>
      <input v-else :type="type" ref="InputValue" class="mdui-textfield-input" v-bind="$attrs" @focus="handleFocus" @blur="handleBlur" @change="handleChange" @input="handleInput"/>
      <div class="mdui-textfield-error">{{ error.text }}</div>
      <div v-if="helper" class="mdui-textfield-helper">{{ helper }}</div>
    </template>
  </div>
</template>

<script>
import MdIcon              from '../../icon'
import {PropItem, HasType} from '../../Utils'

export default {
  inheritAttrs: false,
  name: 'MdTextfield',
  model: {prop: 'value', event: 'input'},
  components: {MdIcon},
  props: {
    value: {},
    rules: PropItem(Function),
    type: PropItem('text'),
    label: PropItem(String, ''),
    helper: PropItem(String, ''),
    floatLabel: PropItem(Boolean, false),
    /** type 为 expandable 时生效*/
    expandable: PropItem(Boolean, false),
    prefix: PropItem(String, 'search'),
    suffix: PropItem(String, 'close')
  },
  data: function () {
    return {
      expandedState: false,
      error: {state: false, text: ''}
    }
  },
  computed: {
    _InputValue () {
      return this.value === null ? undefined : this.value
    },
    classes () {
      const classes = []
      if (this.expandable !== false) {
        classes.push('mdui-textfield-expandable')
        if (this.expandedState) classes.push('mdui-textfield-expanded')
      } else {
        const {floatLabel, helper, error: {state}} = this
        if (floatLabel !== false) classes.push('mdui-textfield-floating-label')
        if (state || helper) classes.push('mdui-textfield-has-bottom')
        if (state) classes.push('mdui-textfield-invalid')
      }
      return classes.join(' ')
    }
  },
  watch: {
    value () {
      this.setInputValue()
    }
  },
  mounted () {
    this.setInputValue()
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
    handleFocus (event) {
      this.$emit('focus', event.target.value)
    },
    handleBlur (event) {
      this.$emit('blur', event.target.value)
    },
    handleChange (event) {
      this.$emit('change', event.target.value)
    },
    handleInput (event) {
      if (event.target.value === this._InputValue) return false
      this.$emit('input', event.target.value)
      // 内容一致性
      this.$nextTick(this.setInputValue)
      /** type 为 expandable 时生效*/
      if (this.expandable === false) this.validate()
    },
    validate () {
      if (this.rules) {
        const rules = this.rules(this.getInput().value)
        const callback = error => {
          this.error.text = ''
          this.error.state = HasType(error, 'error')
          if (this.error.state) this.error.text = error.message
        }
        if (rules && rules.then) {
          rules.then(callback)
        } else {
          callback(rules)
        }
      }
    },
    clearValidate () {
      this.error = {state: false, text: ''}
    }
  }
}
</script>

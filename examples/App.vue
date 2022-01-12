<template>
  <md-row>
    <div class="">
      <h3>switch</h3>
      <div> {{ switchValue }}</div>
      <md-switch v-model="switchValue" :on-value="true" :off-value="0">switch</md-switch>
    </div>
    <div class="">
      <h3>radio</h3>
      <div> {{ radioValue }}</div>
      <md-radio v-model="radioValue" label="true">true</md-radio>
      <md-radio v-model="radioValue" label="false">false</md-radio>
    </div>
    <div class="">
      <h3>checkbox</h3>
      <div> {{ checkboxValue }}</div>
      <md-checkbox v-model="checkboxValue" label="true">true</md-checkbox>
      <md-checkbox v-model="checkboxValue" label="false" indeterminate>false</md-checkbox>
    </div>
    <div>
      <h3>textfield</h3>
      {{ textfieldValue || ' ' }}
      <md-textfield v-model="textfieldValue" label="label"/>
    </div>
    <div>
      <h3>slider</h3>
      {{ sliderValue }}
      <md-slider v-model="sliderValue" discrete/>
    </div>
  </md-row>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import 'mdui/dist/css/mdui.min.css'
import 'mdui'

@Component({})
export default class App extends Vue {
  switchValue = 0
  sliderValue = 0
  radioValue = ''
  textfieldValue = ''
  checkboxValue = true

  onRules (value: unknown): Error | unknown {
    if (!value) {
      return new Error('不能为空')
    } else {
      console.log(value)
    }
  }
}
</script>

<template>
  <md-row>
    <md-select style="margin-left: 100px;">
      <md-select-option-group label="xxx">
        <md-select-option value="ccc">ccc</md-select-option>
        <md-select-option value="xxx">xxx</md-select-option>
      </md-select-option-group>
      <md-select-option value="aaa">aaa</md-select-option>
      <md-select-option value="bbb" selected>bbb</md-select-option>
    </md-select>
    <div style="height: 20px;"></div>
    <md-divider></md-divider>
    <div style="height: 20px;"></div>
    <md-panel accordion popout gapless>
      <md-panel-item open label="xx">
        <div slot="summary" class="mdui-panel-item-summary">summary</div>
        <div slot="summary" class="mdui-panel-item-summary">summary</div>
        <div>xxxxxxxxxxxxxxxxxx</div>
        <div>xxxxxxxxxxxxxxxxxx</div>
        <div>xxxxxxxxxxxxxxxxxx</div>
        <div>xxxxxxxxxxxxxxxxxx</div>
        <div>xxxxxxxxxxxxxxxxxx</div>
        <div>xxxxxxxxxxxxxxxxxx</div>
      </md-panel-item>
      <md-panel-item open label="xx">
        <div slot="summary" class="mdui-panel-item-summary">summary</div>
        <div slot="summary" class="mdui-panel-item-summary">summary</div>
        <div>xxxxxxxxxxxxxxxxxx</div>
        <div>xxxxxxxxxxxxxxxxxx</div>
        <div>xxxxxxxxxxxxxxxxxx</div>
        <div>xxxxxxxxxxxxxxxxxx</div>
        <div>xxxxxxxxxxxxxxxxxx</div>
        <div>xxxxxxxxxxxxxxxxxx</div>
      </md-panel-item>
    </md-panel>
    {{ textfield }}
    <md-textfield label="label" v-model="textfield" @focus="onfocus" @input="onInput" helper="xxxx"/>
  </md-row>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import 'mdui/dist/css/mdui.min.css'
import 'mdui'

@Component({})
export default class App extends Vue {
  textfield = ''

  onInput (e: Event): void {
    console.log('onInput', e)
  }

  onfocus (e: Event): void {
    console.log('onfocus', e)
  }
}
</script>

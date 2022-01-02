<template>
  <div>
    <md-select style="margin-left: 100px;">
      <md-select-option-group label="xxx">
        <md-select-option value="ccc">ccc</md-select-option>
        <md-select-option value="xxx">xxx</md-select-option>
      </md-select-option-group>
      <md-select-option value="aaa">aaa</md-select-option>
      <md-select-option value="bbb" selected>bbb</md-select-option>
    </md-select>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import 'mdui/dist/css/mdui.min.css'
import 'mdui'

@Component({})
export default class App extends Vue {

}
</script>
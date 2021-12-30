<template>
  <md-row>
    <md-col :span="4">md-col-4</md-col>
    <md-col :offset="5">md-col-4</md-col>
  </md-row>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import 'mdui/dist/css/mdui.min.css'

@Component
export default class App extends Vue {
  //
}
</script>
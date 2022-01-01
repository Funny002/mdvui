<template>
  <div>
    <md-button class="mdui-ripple">Button</md-button>
    <div>
      <md-button-group>
        <md-button @click="hide">hide</md-button>
        <md-button @click="show">show</md-button>
        <md-button @click="triggerFunc">trigger</md-button>
      </md-button-group>
    </div>
    <div>
      {{ title }}
    </div>
    <md-fab v-if="isFab" icon="add" open-icon="mode_edit" :trigger="trigger" ripple>
      <md-fab-item icon="backup" @click="onClick(title?'':'xxxxxxxxx')" ripple/>
      <md-fab-item icon="bookmark"/>
    </md-fab>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import 'mdui/dist/css/mdui.min.css'
import 'mdui'

@Component
export default class App extends Vue {
  title = ''
  isFab = true
  trigger: 'click' | 'hover' = 'hover'

  hide (): void {
    this.isFab = false
  }

  show (): void {
    this.isFab = true
  }

  triggerFunc (): void {
    this.trigger = this.trigger === 'hover' ? 'click' : 'hover'
  }

  onClick (value: string): void {
    this.title = value
  }
}
</script>
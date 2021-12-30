import {Component, Vue} from 'vue-property-decorator'
import {CreateElement, VNode} from 'vue'

@Component
export default class ButtonGroup extends Vue {
  render (h: CreateElement): VNode {
    return h('div', {class: 'mdui-btn-group'}, this.$slots.default)
  }
}
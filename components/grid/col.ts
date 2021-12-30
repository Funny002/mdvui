import {Vue, Component, Prop} from 'vue-property-decorator'
import {CreateElement, VNode} from 'vue'
import getClass, {PropsSpan} from './utils'
import {PropItem} from '../../utils/Props'

@Component
export default class Col extends Vue {
  @Prop(PropItem<PropsSpan>()) readonly span!: PropsSpan
  @Prop(PropItem<PropsSpan>()) readonly offset!: PropsSpan

  render (h: CreateElement): VNode {
    return h('div', {class: getClass(this.span, 'col') + getClass(this.offset, 'col-offset', false)}, this.$slots.default)
  }
}
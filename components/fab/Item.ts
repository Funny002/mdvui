import {Component, Prop, Vue} from 'vue-property-decorator'
import {PropItem} from '../../utils/Props'
import {CreateElement, VNode} from 'vue'
import Icon from '../icon'

@Component
export default class FabItem extends Vue {
  // 涟漪动画
  @Prop(PropItem<boolean>(false)) readonly ripple!: boolean
  // 图标
  @Prop(PropItem<string>(undefined, true)) readonly icon !: string

  render (h: CreateElement): VNode {
    let classes = 'mdui-fab mdui-fab-mini'
    if (this.ripple !== false) classes += ' mdui-ripple'
    return h('button', {
      class: classes,
      on: this.$listeners ? {...this.$listeners} : {}
    }, [
      h(Icon, {props: {name: this.icon}})
    ])
  }
}
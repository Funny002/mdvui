import {Vue, Component, Prop} from 'vue-property-decorator'
import {CreateElement, VNode} from 'vue'
import {PropItem} from '../../utils/Props'
import getClass, {PropsSpan} from './utils'

@Component
export default class Row extends Vue {
  // 自定义样式
  @Prop(PropItem<PropsSpan>()) readonly span!: PropsSpan
  // 全部宽
  @Prop(PropItem<boolean>(false)) readonly fluid!: boolean
  // 消除列间距
  @Prop(PropItem<boolean>(false)) readonly gapless!: boolean

  render (h: CreateElement): VNode {
    const fluid = !this.fluid ? '' : '-' + this.fluid
    return h('div', {class: 'mdui-container' + fluid}, [
      h('div', {class: getClass(this.span, 'row')}, this.$slots.default)
    ])
  }
}
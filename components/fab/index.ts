import {Vue, Component, Prop, Watch} from 'vue-property-decorator'
import {PropItem} from '../../utils/Props'
import {CreateElement, VNode} from 'vue'
import Icon from '../icon'
import mdui from 'mdui'

const getBtnIcon = (h: CreateElement, icon: string, openIcon: string): VNode[] => {
  const btnList = [h(Icon, {props: {name: icon}})]
  if (openIcon) btnList.push(h(Icon, {class: 'mdui-fab-opened', props: {name: openIcon}}))
  return btnList
}

const getBtnItem = (list: VNode[]): VNode[] => {
  const btnItem: VNode[] = []
  for (const vNode of list) {
    if (vNode.componentOptions && vNode.componentOptions.tag === 'md-fab-item') {
      btnItem.push(vNode)
    }
  }
  return btnItem
}

declare class FabProps extends mdui.Fab {

}

const eventList = ['open', 'opened', 'close', 'closed']
@Component
export default class Fab extends Vue {
  // 打开时的图标
  @Prop(PropItem<string>()) readonly openIcon!: string
  // 涟漪动画
  @Prop(PropItem<boolean>(false)) readonly ripple!: boolean
  // 默认图标 ～ 必须
  @Prop(PropItem<string>(undefined, true)) readonly icon!: string
  // 触发方式
  @Prop(PropItem<'hover' | 'click'>('hover')) readonly trigger!: 'hover' | 'click'
  //
  __FabObject: null | FabProps = null
  __FabFunc: { [key: string]: (e: Event) => void } = {}

  open (): void {
    this.__FabObject?.open()
  }

  close (): void {
    this.__FabObject?.close()
  }

  toggle (): void {
    this.__FabObject?.toggle()
  }

  show (): void {
    this.__FabObject?.show()
  }

  hide (): void {
    this.__FabObject?.show()
  }

  getState (): string | undefined {
    return this.__FabObject?.getState()
  }

  mounted (): void {
    this.__FabObject = new mdui.Fab(this.$el as HTMLElement, {trigger: this.trigger})
    if (!this.__FabFunc) this.__FabFunc = {}
    for (const keys of eventList) {
      this.__FabFunc[keys] = (event: Event): void => {
        this.$emit(keys, event)
      }
      this.$el.addEventListener(keys + '.mdui.fab', this.__FabFunc[keys])
    }
  }

  beforeDestroy (): void {
    Object.keys(this.__FabFunc).forEach(keys => {
      this.$el.removeEventListener(keys, this.__FabFunc[keys])
    })
  }

  render (h: CreateElement): VNode {
    let classes = 'mdui-fab'
    if (this.ripple !== false) classes += ' mdui-ripple'
    return h('div', {class: 'mdui-fab-wrapper'}, [
      h('button', {class: classes}, getBtnIcon(h, this.icon, this.openIcon)),
      h('div', {class: 'mdui-fab-dial'}, getBtnItem((this.$slots || {}).default || []))
    ])
  }
}
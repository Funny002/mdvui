import {Component, Prop, Vue} from 'vue-property-decorator'
import {PropItem} from '../../utils/Props'
import {CreateElement, VNode} from 'vue'

const slotText = (slot: VNode[]): VNode[] => {
  if (slot && slot.length === 1 && !slot[0].tag && /^[\u4E00-\u9FA3]{2}$/.test(slot[0].text || '')) {
    slot[0].text = (slot[0].text || '').split('').join(' ')
  }
  return slot
}

@Component
export default class Button extends Vue {
  // 类型
  @Prop(PropItem<'button' | 'icon' | 'block'>('button')) readonly type!: string
  // 密集型按钮
  @Prop(PropItem<boolean>(false)) readonly dense!: boolean
  // 浮动效果
  @Prop(PropItem<boolean>(false)) readonly raised!: boolean
  // 禁用
  @Prop(PropItem<boolean>(false)) readonly disabled !: boolean

  render (h: CreateElement): VNode {
    const classes = ['mdui-btn']
    if (this.dense) classes.push('mdui-btn-dense')
    if (this.raised) classes.push('mdui-btn-raised')
    if (this.disabled) classes.push('mdui-btn-disabled')
    if (this.type !== 'button') classes.push('mdui-btn-' + this.type)
    const on = this.$listeners ? {...this.$listeners} : {}
    return h('button', {class: classes.join(' '), on}, slotText(this.$slots.default || []))
  }
}
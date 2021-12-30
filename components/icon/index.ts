import {Vue, Component, Prop} from 'vue-property-decorator'
import {CreateElement, VNode} from 'vue'
import {PropItem} from '../../utils/Props'
import iconMap from './icons.json'

const getIcon = (name: string): string => {
  return (iconMap as { [key: string]: string })[name]
}

const getClass = (float?: string, icon?: string): string => {
  const classes: string[] = ['mdui-icon', icon || 'material-icons']
  if (['left', 'right'].includes(float || '')) {
    classes.push(`mdui-icon-${float}`)
  }
  return classes.join(' ')
}

@Component
export default class Icon extends Vue {
  // 图标名称
  @Prop(PropItem<string>()) readonly name!: string
  // 第三方名称
  @Prop(PropItem<string>()) readonly icon!: string
  // 浮动
  @Prop(PropItem<'left' | 'right'>()) readonly float!: string

  render (h: CreateElement): VNode {
    const {name, float, icon} = this
    const slots = !icon ? getIcon(name) : undefined
    return h('i', {class: getClass(float, icon), domProps: {innerHTML: slots}})
  }
}

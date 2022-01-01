import {Component, Prop, Vue} from 'vue-property-decorator'
import {CreateElement, VNode} from 'vue'
import {PropItem} from '../../utils/Props'
import {Scope} from '../../utils/Limit'

type TypoType = string | 'title' | 'subheading' | 'caption' | 'body' | 'headline' | 'display' | 'none'

interface TypoProps {
  size?: number;
  type: TypoType;
  opacity?: boolean;
}

const getClass = (props: TypoProps): string | string[] => {
  const {type, size = 0, opacity = false} = props
  let classes = `mdui-typo-${type}`
  if ('body' === type && Scope(size, 1, 2)) {
    classes += '-' + size
  } else if ('display' === type && Scope(size, 1, 4)) {
    classes += '-' + size
  }
  if (opacity) classes += '-opacity'
  return classes
}

@Component
export default class Typo extends Vue {
  // 大小
  @Prop(PropItem<number>()) readonly size!: number
  // 类型
  @Prop(PropItem<TypoType>('none')) readonly type!: string
  // 透明度
  @Prop(PropItem<boolean>(false)) readonly opacity!: boolean

  render (h: CreateElement): VNode {
    const {size, type, opacity} = this
    const on = this.$listeners ? {...this.$listeners} : {}
    const classes = 'none' === type ? 'mdui-typo' : getClass({size, type, opacity})
    return h('div', {class: classes, on}, [this.$slots.default])
  }
}

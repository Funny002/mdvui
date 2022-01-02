import UiComponent from './UiComponent'

export declare class MdTypo extends UiComponent {
  /** 大小 */
  size: number
  /** 透明度 */
  opacity: boolean
  /** 类型 */
  type: 'title' | 'subheading' | 'caption' | 'body' | 'headline' | 'display' | 'none'
}

import UiComponent from './UiComponent'

export declare class MdFab extends UiComponent {
  /** 默认显示图标 */
  icon: string;
  /** 涟漪动画 */
  ripple: boolean;
  /** 打开时图标 */
  openIcon: string;
  /** 触发方式 */
  trigger: 'hover' | 'click'

  /** 打开 */
  open (): void

  /** 关闭 */
  close (): void

  /** 切换 */
  toggle (): void

  /** 显示 */
  show (): void

  /** 隐藏 */
  hide (): void

  /** 获取当前状态 */
  getState (): 'opening' | 'opened' | 'closing' | 'closed' | undefined
}
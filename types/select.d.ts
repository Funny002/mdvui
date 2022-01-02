import UiComponent from "./UiComponent";

export declare class MdSelect extends UiComponent {
  /** 窗口间距 `position` 为 `auto` 是生效*/
  gutter: number
  /** 所处位置 */
  position: 'auto' | 'top' | 'bottom'

  /** 打开 */
  open (): void

  /** 关闭 */
  close (): void

  /** 切换 */
  toggle (): void

  /** 重新生成 */
  handleUpdate (): void;

  /** 获取当前状态 */
  getState (): 'opening' | 'opened' | 'closing' | 'closed' | undefined
}
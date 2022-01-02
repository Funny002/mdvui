import UiComponent from "./UiComponent";

export declare class MdButton extends UiComponent {
  /** 密集型按钮 */
  dense: boolean;
  /** 是否激活 button-group 生效 */
  active: boolean;
  /** 浮动效果 */
  raised: boolean;
  /** 禁用 */
  disabled: boolean;
  /** 类型 */
  type: 'none' | 'icon' | 'back';
}
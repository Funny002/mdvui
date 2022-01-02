import UiComponent from './UiComponent'

export interface RowSpan {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

export declare class MdRow extends UiComponent {
  /** 取消间隔 */
  gapless: boolean
  /** 间隔调整为 4px */
  grid: boolean
  /* 是否 100% 宽度 */
  fluid: boolean
  /* 等分列 */
  span: string | RowSpan
}
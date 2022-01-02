import UiComponent from './UiComponent'
import {RowSpan}   from './row'

export declare class MdCol extends UiComponent {
  /* 等分列 */
  span: string | RowSpan
  /* 偏移列 */
  offset: string | RowSpan
}
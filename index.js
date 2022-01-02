import MdCol               from './components/col'
import MdRow               from './components/row'
import MdFab               from './components/fab'
import MdTypo              from './components/typo'
import MdIcon              from './components/icon'
import MdButton            from './components/button'
import MdSelect            from './components/select'
import MdFabItem           from './components/fab-item'
import MdButtonGroup       from './components/button-group'
import MdSelectOption      from './components/select-option'
import MdSelectOptionGroup from './components/select-option-group'

const components = {
  MdCol,
  MdRow,
  MdFab,
  MdTypo,
  MdIcon,
  MdButton,
  MdSelect,
  MdFabItem,
  MdButtonGroup,
  MdSelectOption,
  MdSelectOptionGroup
}

import ripple from './components/ripple'

const directives = {ripple}

const install = function (vue) {
  /** 指令挂载 */
  Object.keys(directives).forEach(keys => {
    vue.use(directives[keys])
  })
  /** 组件挂载 */
  Object.keys(components).forEach(keys => {
    vue.component(keys, components[keys])
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  directives,
  ...components
}
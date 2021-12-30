import Vue, {VueConstructor} from 'vue'

import Typo from './components/typo'
import Icon from './components/icon'
import Row from './components/grid/row'
import Col from './components/grid/col'

const components: { [Key: string]: VueConstructor } = {Typo, Icon, Row, Col}

const install = function (vue: typeof Vue): void {
  Object.keys(components).forEach((key: string) => {
    const model = components[key]
    vue.component('Md' + model.name, model)
  })
}

export default {
  install,
  ...components
}
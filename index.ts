import Vue, {VueConstructor} from 'vue'

import Typo from './components/typo'
import Icon from './components/icon'
import Row from './components/grid/row'
import Col from './components/grid/col'
import Button from './components/button/button'
import ButtonGroup from './components/button/Group'

const components: { [Key: string]: VueConstructor } = {Typo, Icon, Row, Col, Button, ButtonGroup}

const install = function (vue: typeof Vue): void {
  Object.keys(components).forEach((key: string) => {
    const model = components[key]
    vue.component('Md' + model.name, model)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ...components
}
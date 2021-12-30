import Vue, {VueConstructor} from 'vue'
import 'mdui/dist/css/mdui.min.css'

import Typo from './components/typo'
import Icon from './components/icon'

const components: { [Key: string]: VueConstructor } = {Typo, Icon}

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
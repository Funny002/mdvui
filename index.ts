import {VueConstructor} from 'vue'

const components: { [Key: string]: VueConstructor } = {}

const install = function (vue: VueConstructor): void {
  Object.keys(components).forEach((key: string) => {
    const model = components[key]
    vue.component(model.name, model)
  })
}

export default {
  install,
  ...components
}
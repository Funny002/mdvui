/**
 * 懒的自己去引入了
 * 全部封装完了在改
 * */
const CContexts = require.context('./components/', true, /\/index\.js$/)

const components = CContexts.keys().reduce(function (components, path) {
  const models = CContexts(path)
  const name = models.name || models.default.name
  components[name] = models.default || models
  return components
}, {})

import ripple from './directives/ripple'

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

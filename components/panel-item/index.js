import Components from './src/index'

Components.install = function (vue) {
  vue.component(Components.name, Components)
}

export default Components
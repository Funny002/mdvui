import Components from './src/index.vue'

Components.install = function (vue) {
  vue.component(Components.name, Components)
}

export default Components
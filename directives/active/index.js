const bind = function (el, {value}) {
  console.log('active', el, value)
}

const install = function (vue) {
  vue.directive('active', {
    bind
  })
}

export default {
  install,
  bind
}

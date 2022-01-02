const name = 'mdui-ripple'

const bind = function (el, {value}) {
  if (value !== false) el.classList.add(name)
}

const update = function (el, {value}) {
  console.log(value)
  if (value !== false) {
    el.classList.add(name)
  } else if (el.classList.contains(name)) {
    el.classList.remove(name)
  }
}

const install = function (vue) {
  vue.directive('ripple', {
    update,
    bind
  })
}

export default {
  install,
  update,
  bind
}
<template>
  <i class="mdui-icon" :class="classes" v-html="innerHTML"/>
</template>

<script>
import iconMap from './icons.json'
import {PropItem} from '../../Utils'

export default {
  name: 'MdIcon',
  props: {
    icon: PropItem(String),
    name: PropItem(String),
    float: PropItem(String)
  },
  computed: {
    classes () {
      const {icon, float} = this
      const classes = [icon || 'material-icons']
      if (['left', 'right'].includes(float || '')) {
        classes.push(`mdui-icon-${float}`)
      }
      return classes.join(' ')
    },
    innerHTML () {
      const {icon, name} = this
      return !icon ? iconMap[name] : undefined
    }
  }
}
</script>
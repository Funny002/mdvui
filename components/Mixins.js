import mdui from 'mdui'

export default {
  name: 'Mixins',
  data: function () {
    return {
      // 参数名
      eventOptionsList: [],
      // 标准回调方法
      eventList: ['open', 'opened', 'close', 'closed'],
      // 是否存在实例初始化
      eventLabel: '',
      // 实例
      __Inst: null,
      //
      __Func: {}
    }
  },
  computed: {
    eventOptions () {
      return this.eventOptionsList.reduce((value, keys) => {
        value[keys] = this[keys]
        return value
      }, {})
    }
  },
  methods: {
    __InitFunc () {
      this.__Inst = new mdui[this.eventLabel](this.$el, this.eventOptions)
      if (!this.__Func) this.__Func = {}
      this.eventList.forEach(keys => {
        this.__Func[keys] = event => {
          this.$emit(keys, event)
        }
        this.$el.addEventListener(keys + '.mdui.' + this.eventLabel.toLowerCase(), this.__Func[keys])
      })
    }
  },
  mounted () {
    if (this.eventLabel) this.__InitFunc()
  },
  beforeDestroy () {
    if (this.eventLabel) {
      Object.keys(this.__Func || {}).forEach(keys => {
        this.$el.removeEventListener(keys + '.mdui.' + this.eventLabel.toLowerCase(), this.__Func[keys])
      })
    }
  }
}

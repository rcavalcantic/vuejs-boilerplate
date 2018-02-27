import Vue from 'vue'

const app = new Vue({
  data: {
    hello: 'Olá'
  },
  template: '<div id="app">{{ hello }}</div>'
})

export { app }

import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

// 创建一个新的 store 实例
const store = createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

const app = createApp(App);
app.use(store);
app.mount('#app');
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <button @click="increment">Click me</button>
  <span>{{ $store.state.count }}</span>
  <br>
  <button @click="clear">Clear</button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data() {
    return {
      cnt: 0
    }
  },
  components: {
    HelloWorld
  }, 
  mounted() {
    this.cnt = this.$store.state.count;
  },
  methods: {
    increment() {
      this.$store.commit('increment');
      console.log(this.$store.state.count);
      this.cnt = this.$store.state.count;
    },
    clear() {
      this.$store.state.count = 0;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

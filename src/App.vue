<template>
  <div id="app">
    <Pie/>
  </div>
</template>

<script>

import Pie from './components/pie.vue'
export default {
  name: 'App',
  components: {
    Pie
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

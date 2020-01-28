<template>
  <div id="app">
    <Header/>

    <div id="body">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  #body {
    background-color: #f6f8fa;
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

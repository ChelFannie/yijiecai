<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
    <!-- <foot-nav></foot-nav> -->
  </div>
</template>

<script>
// import footNav from './components/foot-nav'
export default {
  name: 'App',
  components: {
    // footNav
  }
}
</script>

<style>
html, body {
  padding: 0;
  margin: 0;
  list-style: none;
  background-color: #fbf9fe;
}
a {
  text-decoration: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-bottom: 50px;
}
</style>

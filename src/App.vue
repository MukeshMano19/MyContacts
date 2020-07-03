<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  beforeCreate(){
    this.$store.dispatch("initIDB");
  }
}
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
  background: #f1f0eb;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  letter-spacing: 1px;
}
</style>

<template>
  <div id="app">
    <AppHeader />
    <Todos />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import Todos from './components/Todos.vue'
export default {
  name: "app",
  components : {AppHeader,Todos}

};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>

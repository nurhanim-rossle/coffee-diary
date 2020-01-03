<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <BrewingCoffee/>
    <AddBrewingCoffee/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import BrewingCoffee from './components/BrewingCoffee.vue'
import AddBrewingCoffee from './components/AddBrewingCoffee.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    BrewingCoffee,
    AddBrewingCoffee
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

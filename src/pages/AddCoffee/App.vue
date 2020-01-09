<template>
  <div id="app">
	THIS IS ADD COFFEE PAGE
	<h1>Add Coffee</h1>
	<AddBrew></AddBrew>
  </div>
</template>

<script>
import AddBrew from './components/AddBrew.vue'

export default {
  name: 'addcoffee',
  components: {
	AddBrew
  }
}
</script>

<style scoped>
#app {
  font-family: Arial, sans-serif;
}
</style>
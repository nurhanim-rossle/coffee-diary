<template>
  <div id="app">
	THIS IS ADD COFFEE PAGE
	<h1>Add Coffee</h1>
	<AddBrew></AddBrew>
  </div>
</template>

<script>
import { db } from '@/assets/js/db'
import AddBrew from './components/AddBrew.vue'

export default {
  name: 'addcoffee',
  components: {
    AddBrew
  },

  data() {
    return {
      documents: [],
    }
  },
  firestore: {
    documents: db.collection('coffees'),
  },
}

var docRef = db.collection("coffees").doc("t0TR8Yvow0nYiI2ix7LY");

console.log(docRef);

docRef.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});
</script>

<style scoped>
#app {
  font-family: Arial, sans-serif;
}
</style>
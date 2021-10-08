<template>
  <div>
		<button @click="increment">Increment</button>
		<button @click="decrement">Decrement</button>
		<button @click="random">Random</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
	methods:{
		...mapActions({
			increment:'counter/increment', 
			decrement:'counter/decrement', 
			random:'counter/random'
			}),
	}
}
</script>

<style>

</style>
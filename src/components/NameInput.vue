<template>
  <form @submit.prevent="submitName">
	<input type="text" v-model="name" placeholder="Type your name..."/>
	<button type="submit">Add name</button>
  </form>
</template>

<script>
export default {
	data(){
		return{
			name: ''
		}
	},
	emits:{
		nameadd:(name)=>{
			return name? true: false;
		}
	},
	methods:{
		submitName(){
			this.$emit('nameadd', this.name)
		}
	}
}
</script>

<style>

</style>
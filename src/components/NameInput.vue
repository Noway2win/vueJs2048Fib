<template>
  <form @submit.prevent="submitName" class="name-form">
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

<style scoped>
.name-form{
	width:400px;
	height: 50px;
	display: grid;
	grid-template-columns: 4fr 1fr;
	grid-gap: 10px;
	background: #000;
	border-radius: 5px;
	padding: 5px;
}
.name-form input{
	border: 1px solid gold;
	outline: none;
	background: #000;
	color: #fff;
	font-size: 1.2em;
	font-weight: bold;
	font-style:italic;
	padding: 5px;
	border-radius: 5px;
}
.name-form button{
	border: 1px solid gold;
	outline: none;
	background: #000;
	color: #fff;
	font-size: 1.2em;
	font-weight: bold;
	font-style:italic;
	border-radius: 5px;
	}
	.name-form button:hover{
		background: gold;
		cursor: pointer;
	}
</style>
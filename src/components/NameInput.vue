<template>
  <form @submit.prevent="submitName" class="name-form">
	<label for="input-for-name" class="name-input_label" :class="error?'name-input_label__error':null">Name</label>
	<input id="input-for-name" class="name-input" type="text" v-model="name" :class="error? 'name-input__error': null" placeholder="Type your name..."/>
	<button type="submit">Add name</button>
  </form>
</template>

<script>
export default {
	data(){
		return{
			name: '',
			error: false
		}
	},
	emits:{
		nameadd:(name)=>{
			return name? true: false;
		}
	},
	methods:{
		submitName(){
			if(!this.name){
				this.error = true;
			}
			this.$emit('nameadd', this.name)
		}
	},
	watch:{
		name(newName){
			if(newName){
				this.error = false;
			}
			this.name=newName;
		}
	}
}
</script>

<style scoped>
.name-form{
	width:600px;
	height: 50px;
	display: grid;
	grid-template-columns: 2fr 5fr 2fr;
	grid-gap: 10px;
	background-color: #756213;
	background-image: linear-gradient(315deg, #756213 0%, #000000 74%);
	border-radius: 5px;
	padding: 5px;
	align-items: center;
}
.name-form > *{
	height: 100%;
	box-sizing: border-box;
}
.name-input{
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
.name-input__error{
	border: 1px solid red;
}
.name-input_label{
	color: #fff;
	font-size: 1.2em;
	font-weight: bold;
	font-style:italic;
	padding: 5px;
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
}
.name-input_label__error{
	color: red;
	content: 'Please, enter your name';
	position:relative;
}
.name-input_label__error::after{
	position: absolute;
	content: 'Please, enter your name';
	font-size: 0.5em;
	width:150px;
	text-align: right;
	height: 20px;
	color: red;
	top:100%;
	right:0;
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
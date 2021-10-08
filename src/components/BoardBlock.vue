<template>
  <div class="board_block" :style="style">	
	<span>{{value}}</span>
  </div>
</template>


<script>
export default {
	props:{
		value:{
			require:true
		},
	},
	computed:{
		style(){
			let color = "#fff";
			if(this.value == 1){
				color ="#00FF00"
			}
			if(this.value == 2){
				color ="#FF00FF"
			}
			if(this.value == 3){
				color ="#FF00CC"
			}
			if(this.value == 5){
				color ="#FF0099"
			}
			if(this.value == 8){
				color ="#CC00FF"
			}
			if(this.value == 13){
				color ="#099FFF"
			}
			if(this.value == 21){
				color ="#6E0DD0"
			}
			if(this.value == 34){
				color ="#9900FF"
			}
			if(this.value == 55){
				color ="#9900FF"
			}
			if(this.value == 89){
				color ="#FF0000"
			}
			if(this.value == 144){
				color ="#FD1C03"
			}
			if(this.value == 233){
				color ="#FF3300"
			}
			if(this.value >= 377){
				color ="#FF6600"
			}
			return {
				backgroundColor:color
			}
	},
}}
</script>

<style scoped>
	.board_block{
		width: 100%;
		height: 100%;
		background-color: #fff;
		border-radius:5px;
		display:flex;
		align-items: center;
		justify-content: center;
		font-size: 26px;
	}
</style>
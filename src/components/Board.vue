<template>
<div class="stats"><p>Player: {{playerName}}</p><p>Result: {{total}}</p></div>
<div class="board">
	<BoardBlock v-for="block in blocks" :key="block.id" :value="block.value"/>
</div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import BoardBlock from "@/components/BoardBlock";

export default {
	data() {
		return {
			blocks:[
				{id:1, value: null},
				{id:2, value: null},
				{id:3, value: null},
				{id:4, value: null},
				{id:5, value: null},
				{id:6, value: null},
				{id:7, value: null},
				{id:8, value: null},
				{id:9, value: null},],		
		}
	},
	emits: ['gameEnded'],
	props:{
		playerName: {
			type: String,
			required: true,
		},
	},
	methods: {
		...mapActions({
			gameEnded:'game/newResult', 
		}),
		moveBlocksLeft(){
			this.moveBlocks('left');
		},
		moveBlocksRight(){
			this.moveBlocks('right');
		},
		moveBlocksTop(){
			this.moveBlocks('top');
		},
		moveBlocksBottom(){
			this.moveBlocks('bot');
		},
		mergeBlocks(currentBlock, nextBlock){
			if(nextBlock.value == null){
				return currentBlock.value;
			}
			if(nextBlock.value === 1 && currentBlock.value===1){
				return 2
			}
			if(nextBlock.value === currentBlock.value+(Math.round(currentBlock.value/((1+Math.sqrt(5))/2)))|| nextBlock.value === Math.round(currentBlock.value/((1+Math.sqrt(5))/2))){
				return nextBlock.value+currentBlock.value;
			}
			return null;
		},
		moveBlocks(direction){
			switch(direction){
				case 'left':
					for(let i=2; i<=8; i+=3){
						for(let j=0; j<=1; j++){
						let nextVal = this.mergeBlocks(this.blocks[i-j], this.blocks[i-j-1]);
						this.blocks[i-j-1].value= nextVal||this.blocks[i-j-1].value;
						this.blocks[i-j].value= nextVal? null:this.blocks[i-j].value;
						}
					}
					break;
				case 'right':
						for(let i=0; i<=6; i+=3){
							for(let j=0; j<=1; j++){
							let nextVal = this.mergeBlocks(this.blocks[i+j], this.blocks[i+j+1]);
							this.blocks[i+j+1].value= nextVal||this.blocks[i+j+1].value;
							this.blocks[i+j].value= nextVal? null:this.blocks[i+j].value;
						}
					}
					break;
				case 'top':
						for(let i=6; i<=8; i+=1){
							for(let j=0; j<=i-3; j+=3){
							let nextVal = this.mergeBlocks(this.blocks[i-j], this.blocks[i-j-3]);
							this.blocks[i-j-3].value= nextVal||this.blocks[i-j-3].value;
							this.blocks[i-j].value= nextVal? null:this.blocks[i-j].value;
						}
					}
					break;
				case 'bot':
						for(let i=0; i<=2; i+=1){
							for(let j=0; j<=i+3; j+=3){
							let nextVal = this.mergeBlocks(this.blocks[i+j], this.blocks[i+j+3]);
							this.blocks[i+j+3].value= nextVal||this.blocks[i+j+3].value;
							this.blocks[i+j].value= nextVal? null:this.blocks[i+j].value;
						}
					}
					break;
			}
			if(!this.loseStatus){
					this.addValue()
				}
		},
		checkForLose(){
			for(let i=0; i<=8; i++){
				if(i===0 || i===1 || i===3 || i===4){
					if(this.mergeBlocks(this.blocks[i], this.blocks[i+1])||this.mergeBlocks(this.blocks[i], this.blocks[i+3])){
						return false;
					}
				}
				if(i===2 || i===5){
					if(this.mergeBlocks(this.blocks[i], this.blocks[i+3])){
						return false;
					}
				}
				if(i===6 || i===7){
					if(this.mergeBlocks(this.blocks[i], this.blocks[i+1])){
						return false;
					}
				}
			}
			this.gameEnded({result: this.total, playerName: this.playerName, id: Date.now()});
			this.$emit('gameEnded', this.total);
			return true;
		},
		addValue(){
			const availableBlocks = this.blocks.filter(block => block.value === null);
			if(availableBlocks.length === 0 ){
				this.loseStatus = this.checkForLose();
			}
			if(!this.loseStatus && availableBlocks.length > 0){
				const blockToAddValue = availableBlocks[Math.floor(Math.random() * availableBlocks.length)];
				blockToAddValue.value = Math.random() > 0.8 ? 2: 1;
			}
		},
		bindEventListners(e){
			if(e.keyCode === 37){
				e.preventDefault();
				this.moveBlocksLeft();
			}
			if(e.keyCode === 38){
				e.preventDefault();
				this.moveBlocksTop();
			}
			if(e.keyCode === 39){
				e.preventDefault();
				this.moveBlocksRight();
			}
			if(e.keyCode === 40){
				e.preventDefault();
				this.moveBlocksBottom();
			}
		}	
	},
	mounted(){
		window.addEventListener('keydown', this.bindEventListners);
		this.addValue();
	},
	beforeUnmount(){
		window.removeEventListener('keydown', this.bindEventListners);
	},
	components: {
		BoardBlock,
	},
	computed:{
		total(){
			return this.blocks.reduce((total, block) => total + block.value, 0);
		},
		...mapGetters({
			record: 'game/record'
		})
	}
}
</script>

<style scoped>
.board{
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(3, 1fr);
	grid-gap: 1px;
	width:400px;
	height:400px;
	background-color: black;
	border-radius: 0 0 5px 5px;
	padding:5px;
}
.stats{
	width:400px;
	height:50px;
	background-color: black;
	color:#fff;
	display: flex;
	border-radius: 5px 5px 0 0;
	padding:5px;
	justify-content: space-between;
	align-items: center;
}
</style>
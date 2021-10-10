<template>
<h2>Best result {{record}}</h2>
<NameInput v-if="!playerName && !loseStatus" @nameadd="updateName"></NameInput>
<Board v-if="!loseStatus && playerName" @gameEnded="gameEnded" :playerName="playerName"></Board>
<GameResults v-if="finalResult && playerName" :playerName="playerName">{{finalResult}}</GameResults>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import Board from "@/components/Board";
import GameResults from "@/components/GameResults";
import NameInput from "@/components/NameInput.vue";

export default {
	data() {
		return {
			playerName: "",
			loseStatus: false,
			finalResult: 0,		
		}
	},
	methods: {
		...mapActions({
			gameEnded:'game/newResult', 
		}),
		gameEnded(result) {
			this.finalResult = result;
			this.loseStatus = true;
		},
		updateName(name) {
			this.playerName = name;
		}
	},
	components: {
		Board,
		GameResults,
		NameInput,
	},
	computed:{
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
	border-radius: 5px;
	padding:5px;
}
</style>
<template>
  <section class="records">
	<div class="records-header">
		<span>Player</span>
		<span>Result</span>
	</div>
	<div class="records-body" v-if="results.length">
		<div class="result"  v-for="result in results" :key="result.id">
			<span>{{result.playerName}}</span>
			<span>{{result.result}}</span>
		</div>
	</div>
	<div class="empty-results" v-else>
		<p>No results yet. You will be first</p>
	</div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	computed:{
		...mapGetters({
			results: 'game/results'
		})
	}
}
</script>

<style>
	.records{
		display: flex;
		flex-direction: column;
		gap:10px;
		align-items: center;
		background: #000;
		width: 100%;
		height: 100%;
		padding: 0 50px;
		box-sizing: border-box;
	}
	.records-header{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 50px;
		color:#fff;
		border-bottom: 1px solid gold;
	}
	.records-body{
		display: flex;
		flex-direction: column;
		gap: 10px;
		align-items: center;
		width: 100%;
	}
	.result{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 50px;
		color:#fff;
		border-bottom: 1px solid gold;
	}
	.empty-results{
		color: #fff;
	}
</style>
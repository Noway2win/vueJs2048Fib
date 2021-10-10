<template>
  <section class="game-results">
	<h2>Thanks for the game, {{playerName}}</h2>
	<p>You have <slot></slot> points</p>
  </section>
</template>

<script>
export default {
	props:{
		playerName: String,
	}
}
</script>

<style scoped>
.game-results {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap:10px;
  width: 400px;
  height: 400px;
  background-color: #000;
  color: #fff;
  border-radius: 5px;
}
</style>
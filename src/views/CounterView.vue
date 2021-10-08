<template>
  <section class="counter-section">
	<Counter></Counter>
	<Controls></Controls>
  </section>
</template>

<script>
import Controls from '@/components/Controls.vue';
import Counter from '@/components/Counter.vue';
export default {
	components: {
		Controls,
		Counter
	},
}
</script>

<style>
.counter-section{
	width:100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
}
</style>
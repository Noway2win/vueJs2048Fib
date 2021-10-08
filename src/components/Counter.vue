<template>
  <div>
	<span>{{count}}</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	computed: {
		...mapGetters({
			count: 'counter/count'
		})
	}
}
</script>

<style>

</style>
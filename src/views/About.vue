<template>
  <section class="about">
	<h2 class="about_title highlighted-text">About</h2>
	<p  class="about_text">This is the about page</p>
	<h3 class="about_sub-title highlighted-text">Things learned</h3>
	<ul class="about_list">
		<li>Vue.js</li>
		<li>Vuex</li>
		<li>Vue-router</li>
	</ul>
  </section>
</template>

<script>
export default {

}
</script>

<style>
.about{
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap:10px;
	font-size:15px;
}
.about > *{
	margin: 0;
}
.about_title{
	font-size: 2rem;
	font-weight: bold;
}
.about_text{
	font-size: 1rem;
	font-weight: bold;
	color: #f7e4ad;
}
.about_list{
	list-style: inside;
	display:flex;
	flex-direction: column;
	align-items: flex-start;
	gap:2px;
	padding: 0;
	font-size: 1rem;
	color: #f7e4ad;
}
</style>
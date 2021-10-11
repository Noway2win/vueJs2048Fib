<template>
  <div id="nav">
    <router-link to="/">Game</router-link>
	<router-link to="/records">Records</router-link>
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<style>
body{
	min-height:100vh;
	min-width: 100vw;
	padding: 0;
	margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
  width:100%;
  min-height:100vh;
  background-color: #e84393;
  background-image: linear-gradient(315deg, #e84393 0%, #000000 74%);
}

#nav {
  padding: 30px;
  width:100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
}

#nav a {
  font-weight: bold;
  color: #f7e4ad;
}

#nav a.router-link-exact-active {
  color: #fcd360;
}
.highlighted-text{
	color:#fcd360;
}
</style>

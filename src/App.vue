<template>
	<div id="app">
		<router-link to="/">Home</router-link>
		<router-link to="/bibliadeestudo">Bíblia de Estudo</router-link>
		<router-link to="/about">Sobre</router-link>
		<router-link to="/contact">Contato</router-link>
		<router-link to="/dthree">D3</router-link>
		<router-link to="/threejs">Three.js</router-link>
		<router-link to="/jqueryuijs">JQuery-UI</router-link>
		<router-link to="/jspdfjs">JSPdf</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'app'
	}

</script>

<style>

</style>

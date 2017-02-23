<template>
	<div id="bibliadeestudo">
		{{ this.$store.state.verse }}
	</div>
</template>

<script>
	import 'script-loader!../../static/bootstrap/js/bootstrap.min.js'
	import loader from '../api/verse-loader'

	export default {
		name: 'bibliadeestudo',
		data() {
			return {
				msg: ''
			}
		},
		methods: {
			getBcv: loader.getBcv
		},
		watch: {
			'$route'(to, from) {
				this.getBcv(this.$route.params.book, this.$route.params.chapter, this.$route.params.verse, this.$store)
			}
		}
	}
</script>

<style>
	@import url('../../static/bootstrap/css/bootstrap.min.css');

</style>

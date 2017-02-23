<template>
	<div id="jspdfjs">
	</div>
</template>

<script>
	import JsPDF from '../../static/jspdf.min.js'

	export default {
		name: 'jspdfjs',
		data() {
			return {
				msg: ''
			}
		},
		mounted: function() {
			const doc = new JsPDF()
			doc.text('Hello world!', 10, 10)
			doc.save('a4.pdf')
		}
	}
</script>

<style>
	@import url('../../static/bootstrap/css/bootstrap.min.css');

</style>

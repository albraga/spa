<template>
	<div id="about">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<h1 class="page-header">Sobre mim
						<small>Prazer em conhecer!</small>
					</h1>
					<p> {{author}} </p>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-12">
					<h2 class="page-header"><em>"Euquipe"</em> <span class="glyphicon glyphicon-thumbs-up"></span> </h2>
				</div>
				<div class="col-lg-4 col-sm-6 text-center">
					<img class="img-circle img-responsive img-center" src="../assets/eu.jpg" alt="">
					<h3>Alexandre Braga
						<small>Analista de Sistemas</small>
					</h3>
					<p> {{aboutAuthor}} </p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import 'script-loader!../../static/bootstrap/js/bootstrap.min.js'
	import i18next from 'i18next'
	import pt from '../i18next-cfg/pt'

	let author, aboutAuthor

	i18next.init({
		lng: 'pt',
		resources: {
			pt: {
				translation: {
					'author': pt.message.author,
					'aboutAuthor': pt.message.aboutAuthor
				}
			}
		}
	}, (err, t) => {
		author = i18next.t('author'),
		aboutAuthor = i18next.t('aboutAuthor')
	})
	
	export default {
		name: 'about',
		data() {
			return {
				author: author,
				aboutAuthor: aboutAuthor
			}
		}
	}
</script>

<style>
	@import url('../../static/bootstrap/css/bootstrap.min.css');

	.img-center {
		margin: 0 auto;
	}

</style>

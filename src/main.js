import 'expose-loader?$!expose-loader?jQuery!expose-loader?jquery!../static/jquery-ui/external/jquery/jquery.js'
import Vue from 'vue'
import router from './router'
import App from './App.vue'
import store from './store'

new Vue({
	el: '#app',
	store,
	render: h => h(App),
	data: {

	},
	router
})

import 'expose-loader?$!expose-loader?jQuery!expose-loader?jquery!../static/jquery-ui/external/jquery/jquery.js'
import Vue from 'vue'
import router from './router'
import App from './App.vue'
import i18nCfg from './i18n-cfg'
import store from './store'

i18nCfg.config()

new Vue({
	el: '#app',
	store,
	render: h => h(App),
	data: {
		datum: 'testing!'
	},
	router
})


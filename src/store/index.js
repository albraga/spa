import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		verse: ''
	},
	mutations: {
		addVerse(state, payload) {
			state.verse = payload
		}
	}
})

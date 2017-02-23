import Vue from 'vue'
import vueI18n from 'vue-i18n'
import pt from './pt'
import en from './en'

module.exports.config = function config() {
	Vue.use(vueI18n)

	const locales = { pt, en }

	Vue.config.lang = 'pt'

	Object.keys(locales).forEach(function(lang) {
		Vue.locale(lang, locales[lang])
	})
}

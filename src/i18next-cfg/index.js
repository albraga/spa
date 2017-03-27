import Vue from 'vue'
import i18next from 'i18next'
import pt from './pt'
import en from './en'

	let author, aboutAuthor

	i18next.init({
		lng: 'en',
		resources: {
			pt: {
				translation: {
					'author': pt.message.author,
					'aboutAuthor': pt.message.aboutAuthor
				}
			},
			en: {
				translation: {
					'author': en.message.author,
					'aboutAuthor': en.message.aboutAuthor
				}
			}
		}
	}, (err, t) => {
		author = i18next.t('author'),
		aboutAuthor = i18next.t('aboutAuthor')
	})

	module.exports = { author, aboutAuthor }

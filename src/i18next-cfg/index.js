import i18next from 'i18next'
import pt from './pt'
import en from './en'

module.exports = function(lng) {
	let author, aboutAuthor
	i18next.init({
		lng: lng,
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
		if (err) { console.log(err) }
		author = i18next.t('author')
		aboutAuthor = i18next.t('aboutAuthor')
	})
	return { author, aboutAuthor }
}

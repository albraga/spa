import oboe from 'oboe'

function getBcv(book, chapter, verse, store) {
	oboe(`./staticdata/${book}.json`)
		.node({
			[`${book}_${chapter}_${verse}`]: function(bcv) {
				store.commit('addVerse', bcv)
			}
		})
}

module.exports.getBcv = getBcv

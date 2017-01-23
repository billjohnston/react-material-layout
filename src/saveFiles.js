var fs = require('fs')
var _ = require('lodash')

module.exports = (css) => Promise.all(
	_.map(css, (src, file) => new Promise((resolve, reject) => {
			fs.writeFile(`./dist/${file}.css`, src, function(err){
				if (err) {
					reject(err)
				} else {
					resolve()
				}
			})
		})
	)
)

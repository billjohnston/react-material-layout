var Promise = require('bluebird')
var cleanCss = require('clean-css')
var _ = require('lodash')

module.exports = (css) => Promise.props(
	_.reduce(css, (results, src, file) => {
		results[`${file}.min`] = new Promise((resolve, reject) => {
			new cleanCss().minify(src, function (error, minified) {
				if (error) {
					reject(err);
				} else {
					resolve(minified.styles)
				}
			})
		})
		return results
	}, {})
)

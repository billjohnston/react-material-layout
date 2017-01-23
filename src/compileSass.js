var Promise = require('bluebird')
var sass = require('node-sass')
var _ = require('lodash')

module.exports = (sassSrc) => Promise.props(
	_.reduce(sassSrc, (results, src, file) => {
		results[file] = new Promise((resolve, reject) => {
			sass.render({ data: src }, (err, result) => {
				if (err) {
					reject(err)
				} else {
					resolve(result.css)
				}
			})
		})
		return results
	}, {})
)

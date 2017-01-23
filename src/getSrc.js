const Promise = require('bluebird')
const fetch = require('node-fetch')
const path = require('path')

const baseUrl = 'https://raw.githubusercontent.com/angular/material/release/';
const srcFiles = [
	['variables', 'style/variables.scss'],
	['mixins', 'style/mixins.scss'],
	['layoutAttributes', 'services/layout/layout-attributes.scss'],
	['layoutStyle', 'style/layout.scss'],
	['layoutService', 'services/layout/layout.scss'],
]

module.exports = (release) => {
	const releaseUrl = `${baseUrl}${release}/src/core/`
	return Promise.mapSeries(srcFiles, (srcFile) => (
		fetch(releaseUrl + srcFile[1]).then(
			(response) => response.text()
		).then(
			(response) => [srcFile[0], response]
		)
	)).then((fileDataSet) => (
		fileDataSet.reduce((results, fileData, i) => {
			results[fileData[0]] = fileData[1]
			return results
		}, {})
	))
}

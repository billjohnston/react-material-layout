const _ = require('lodash')
const run = require('generator-runner')

const getRelease = require('./getRelease')
const getSrc = require('./getSrc')
const createScssSource = require('./createScssSource')
const compileSass = require('./compileSass')
const minifyCss = require('./minifyCss')
const saveFiles = require('./saveFiles')

function* buildProcess() {
	try {
		const releaseVersion = yield getRelease()
		const fileData = yield getSrc(releaseVersion)
		console.log('...getting source files')
		const scssSource = createScssSource(fileData)
		console.log('...compiling scss')
		const css = yield compileSass(scssSource)
		console.log('...minifying css')
		const minifiedCss = yield minifyCss(css)
		console.log('...saving files')
		yield saveFiles(Object.assign(css, minifiedCss))
		console.log('done')
	} catch(e) {
		console.log(e)
	}
}

run(buildProcess)

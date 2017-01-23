const prompt = require('prompt')

module.exports = () => new Promise((resolve, reject) => {
	prompt.start();
	prompt.get(['Material release'], (err, promptData) => {
		const release = promptData['Material release']
		if (release) {
			resolve(release)
		} else {
			reject('Must provide a release version')
		}
	})
})

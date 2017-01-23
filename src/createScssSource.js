const createDataAttributes = require('./createDataAttributes')

module.exports = (srcFileObj) => ({
	'react-material-layout': `${srcFileObj.variables} ${srcFileObj.mixins} ${createDataAttributes(srcFileObj.layoutAttributes)}`,
	'react-material-class-layout': `${srcFileObj.variables} ${srcFileObj.mixins} ${srcFileObj.layoutStyle} ${srcFileObj.layoutService}`,
})

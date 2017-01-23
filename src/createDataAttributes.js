module.exports = (src) => src.replace(/(\[)(.*?\])/g, '$1data-$2')

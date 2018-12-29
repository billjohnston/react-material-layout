React Material Layout
--------------
[Angular Material](https://material.angularjs.org) flex layout attributes without all the other stuff. Prefixed with `data-` for react.

```npm install react-material-layout```

```bower install react-material-layout```

Data Attribute Example
--------------
	// You can either build css with webpack, or simply link in the HTML

	// HTML link:
	// <link rel="stylesheet" href="https://raw.githubusercontent.com/billjohnston/react-material-layout/master/dist/react-material-layout.min.css">

	// Webpack:
	// import 'react-material-layout/dist/react-material-layout.min.css'

	class FlexboxTest extends React.Component{
		render() {
			return (
				<div data-flex data-layout="column" data-layout-align="space-between">
					<div data-flex data-layout="row" data-layout-align="space-between">
						<div className="blue-box">1</div>
						<div className="blue-box">2</div>
						<div className="blue-box">3</div>
					</div>
					<div data-flex data-layout="row" data-layout-align="space-around center">
						<div className="blue-box">1</div>
						<div className="blue-box">2</div>
						<div className="blue-box">3</div>
					</div>
					<div data-flex data-layout="row" data-layout-align="start center">
						<div className="blue-box">1</div>
						<div className="blue-box">2</div>
						<div className="blue-box">3</div>
					</div>
					<div data-flex data-layout="row" data-layout-align="end center">
						<div className="blue-box">1</div>
						<div className="blue-box">2</div>
						<div className="blue-box">3</div>
					</div>
				</div>
			)
		}
	}

	React.render(<FlexboxTest />, document.getElementById('container'))

[Fiddle](https://jsfiddle.net/billjohnston4/zckxdmhz/)

[Docs](https://material.angularjs.org/latest/layout/alignment) (remember to prefix all attributes with `data-`)

Class based Example
--------------
	// HTML link:
	// <link rel="stylesheet" href="https://raw.githubusercontent.com/billjohnston/react-material-layout/master/dist/react-material-class-layout.min.css">

	// Webpack:
	// import 'react-material-layout/dist/react-material-class-layout.min.css'

	class FlexboxTest extends React.Component{
		render() {
			return (
				<div className="flex layout-column layout-align-space-between">
					<div className="flex layout-row layout-align-space-between">
						<div className="blue-box">1</div>
						<div className="blue-box">2</div>
						<div className="blue-box">3</div>
					</div>
					<div className="flex layout-row layout-align-space-around-center">
						<div className="blue-box">1</div>
						<div className="blue-box">2</div>
						<div className="blue-box">3</div>
					</div>
					<div className="flex layout-row layout-align-start-center">
						<div className="blue-box">1</div>
						<div className="blue-box">2</div>
						<div className="blue-box">3</div>
					</div>
					<div className="flex layout-row layout-align-end-center">
						<div className="blue-box">1</div>
						<div className="blue-box">2</div>
						<div className="blue-box">3</div>
					</div>
				</div>
			)
		}
	}

	React.render(<FlexboxTest />, document.getElementById('container'))

[Fiddle](https://jsfiddle.net/billjohnston4/1wtgh25o/)

[Docs](https://material.angularjs.org/latest/layout/alignment) (use classes instead of attributes)

Build
--------------
```npm run build```

You will be prompted for a release version (currently 1.1.7)

import React from 'react';
import ReactDOM from 'react-dom';
const classes = require('../src/mystyles.scss');
import { ImageComponent } from './imageComponent';
import { HelloWorldComponent } from './helloWorldComponent';

ReactDOM.render(
	<div>
		<h1>Modulo 3 - Bundling - Weback</h1>
		<div className={classes.container}>
			<ImageComponent />
			<HelloWorldComponent />
		</div>
	</div>,
	document.getElementById('root'),
);

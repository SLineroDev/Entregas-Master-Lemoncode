import React from 'react';
const classes = require('./helloWorldComponentStyles.scss');

export const HelloWorldComponent = () => {
	return (
		<div className={classes.span}>
			<span>Hola Mundo</span>
		</div>
	);
};

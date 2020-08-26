import React from 'react';
const classes = require('./helloWorldComponentStyles.scss');

export const HelloWorldComponent = () => {
	return (
		<div className={classes.span}>
			<span>{process.env.TEXT}</span>
		</div>
	);
};

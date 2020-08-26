import React from 'react';
const classes = require('./imageComponentStyles.scss');
import img from './content/image1.png';

export const ImageComponent = () => {
	return (
		<div className={classes.imgContainer}>
			<img src={img} alt="" />
		</div>
	);
};

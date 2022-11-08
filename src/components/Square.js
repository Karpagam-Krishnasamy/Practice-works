import React from 'react';

const Square = ({ state: { shapes }}) =>
	shapes.map(({ size, top, left }, index) =>
		<div
			key={ index }
			style={ {
				position: 'absolute',
				width: `${ size }vmin`,
				height: `${ size }vmin`,
				left: `${ left }vmin`,
				top: `${ top }vmin`,
				backgroundColor: 'black',
			} }
		/>);

export default Square;

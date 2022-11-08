import React from 'react';

const Square = ({ state: { shapes }}) =>
	shapes.map(({ size, top, left }, index) =>
		<div
			key={ index }
			style={ {
				position: 'absolute',
				width: `${ size }vmin`,
				height: `${ size }vmin`,
				left: '50%',
				top: '50%',
				backgroundColor: 'black',
				transform: 'translate(-50%, -50%) ',
			} }
		/>);

export default Square;

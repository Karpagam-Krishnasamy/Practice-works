import { rndBetween } from '@laufire/utils/lib';

/* eslint-disable no-magic-numbers */
const ShapeManager = {
	getSquare: ({ state: { shapes }}) =>
		[...shapes,
			{
				size: rndBetween(5, 10),
				top: rndBetween(5, 95),
				left: rndBetween(5, 95),
			}],
};

export default ShapeManager;

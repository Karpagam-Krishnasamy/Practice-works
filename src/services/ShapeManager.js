import { rndBetween } from '@laufire/utils/lib';

/* eslint-disable no-magic-numbers */
const ShapeManager = {
	getSquare: ({ state: { shapes }}) =>
		[...shapes,
			{
				size: rndBetween(5, 10),
				top: rndBetween(1, 90),
				left: rndBetween(1, 90),
			}],
};

export default ShapeManager;

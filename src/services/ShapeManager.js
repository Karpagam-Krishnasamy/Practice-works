import { rndBetween } from '@laufire/utils/lib';

const ShapeManager = {
	getSquare: ({
		state: { shapes },
		config: { minSize, maxSize, minSpace, maxSpace },
	}) => [...shapes,
		{
			size: rndBetween(minSize, maxSize),
			x: rndBetween(minSpace, maxSpace),
			y: rndBetween(minSpace, maxSpace),
		}],
};

export default ShapeManager;

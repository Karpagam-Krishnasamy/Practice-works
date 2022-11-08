import ShapeManager from '../services/ShapeManager';

const getSquare = (context) => ({
	shapes: ShapeManager.getSquare(context),
});

const actions = {
	getSquare,
};

export default actions;

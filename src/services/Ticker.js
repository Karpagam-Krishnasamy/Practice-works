const Ticker = {
	start: ({ config: { timeDelay, squareCount }, actions }) => {
		const squareInterval = setInterval(() =>
			actions.getSquare(), timeDelay);

		setTimeout(() =>
			clearInterval(squareInterval), timeDelay * squareCount);
	},
};

export default Ticker;



export const defaultMiddleware = store => next => action => {

	next(action);

	switch (action.type) {
		default:
			break;
	}

};

function objectFilter(obj, filterType = 'number', result = {}, path = '') {
	Object.getOwnPropertyNames(obj).forEach((key) => {
		if (obj[key] === null) return;

		switch (typeof obj[key]) {
			case filterType:
				result[!path ? key : path + `.${key}`] = obj[key];
				break;
			case 'object':
				objectFilter(obj[key], filterType, result, !path ? key : path + `.${key}`);
				break;
			default:
				false;
				break;
		}
	});

	return result;
}
function objectNumFilter(obj) {
	return objectFilter(obj, 'number');
}
function objectStringFilter(obj) {
	return objectFilter(obj, 'string');
}

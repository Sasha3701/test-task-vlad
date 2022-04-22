export const upperCaseKeys = (obj: Record<string, any>): Record<string, any> => {
	const newObj: Record<string, any> = {};
	if (Array.isArray(obj)) {
		return obj.map((item) => item instanceof Object ? upperCaseKeys(item) : item);
	};
	Object.entries(obj).forEach(([key, value]) => {
		newObj[key.toUpperCase()] = value instanceof Object ? upperCaseKeys(value) : value;
	});
	return newObj;
};

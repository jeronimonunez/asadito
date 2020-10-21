export const isObject = possibleObject => possibleObject && possibleObject.constructor === Object

export const isEmptyObject = obj => !isObject(obj) || !(Object.keys(obj).length > 0)

export const isEmptyArray = array => !Array.isArray(array) || array.length === 0
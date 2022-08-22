import { isObject, isArray } from "lodash";

const objIsObject = (obj) => isObject(obj) && !isArray(obj) && typeof obj === 'object';

export { objIsObject };
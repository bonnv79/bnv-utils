import { isArray, isEmpty, isString } from "lodash";

const objIsEmpty = (obj) => isEmpty(obj) || isArray(obj) || isString(obj);

export { objIsEmpty };
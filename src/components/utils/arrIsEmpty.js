import { isArray, isEmpty } from "lodash";

const arrIsEmpty = (obj) => isEmpty(obj) || !isArray(obj);

export { arrIsEmpty };
import { unionBy } from "lodash";

const arrUnionBy = (...arr) => unionBy(...arr, (i) => JSON.stringify(i));

export { arrUnionBy };
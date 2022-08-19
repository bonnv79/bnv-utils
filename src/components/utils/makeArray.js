const makeArray = (count, fill = null) => fill ? new Array(count).fill(fill) : [...Array(count).keys()];

export { makeArray };
export const STORIES_TITLE = {
  UTILS: 'Utils',
  LODASH: 'Lodash',
}

export const getUtilsTitle = (title) => `${STORIES_TITLE.UTILS}/${title}`;
export const getLodashTitle = (title) => `${STORIES_TITLE.LODASH}/${title}`;

export const UNIT = {
  ARRAY_EMPTY: [],
  OBJECT_EMPTY: {},
  UNDEFINED: undefined,
  NULL: null,
  NEGATIVE_INFINITY: -Infinity,
  INFINITY: Infinity,
  ZERO: 0,
  EMPTY: '',
  FUNCTION: () => { },
  TRUE: true,
  FALSE: false,
  NAN: NaN
}
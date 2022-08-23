import { toString, isArray } from 'lodash';
import React from 'react';
import { FormLabel } from '../common/Form';
import { getLodashTitle } from '../contants';

export default {
  title: getLodashTitle('Is Array'),
  argTypes: {
    arr: {
      control: { type: 'array' }
    },
  },
};

const parseString = {
  [undefined]: true,
  [() => { }]: true,
  [-Infinity]: true,
  [Infinity]: true,
  [NaN]: true,
}

const Template = (args) => {
  const arr = [];
  return (
    <FormLabel
      codeBlock
      label={(
        <>
          {`
import { isArray } from 'lodash';

isArray(${JSON.stringify(arr)})
// ${isArray(arr)}

          `}
        </>
      )}
    >
      <div>
        {
          args.arr.map((item, index) => {
            return (
              <div key={`id-${index}`} style={{ marginBottom: 8 }}>
                <span>
                  isArray(<b>{parseString[item] ? (toString(item) || 'undefined') : JSON.stringify(item)}</b>)
                </span>
                <span>
                  {` // ${toString(isArray(item))}`}
                </span>
              </div>
            );
          })
        }
      </div>
    </FormLabel>
  )
};

export const _isArray = Template.bind({});
_isArray.args = {
  arr: [
    [1, 2],
    [],
    { a: 1 },
    {},
    undefined,
    null,
    -Infinity,
    Infinity,
    -1,
    0,
    1,
    '',
    '0',
    'string',
    () => { },
    true,
    false,
    NaN
  ],
};

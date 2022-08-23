import { toString } from 'lodash';
import React from 'react';
import { arrIsEmpty } from '../components/index';
import { FormLabel } from './common/Form';
import { getUtilsTitle } from './contants';

export default {
  title: getUtilsTitle('Arr Is Empty'),
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
  const arr = [1, 2];
  return (
    <FormLabel
      codeBlock
      label={(
        <>
          {`
import { arrIsEmpty } from 'bnv-utils';

arrIsEmpty(${JSON.stringify(arr)})
// ${arrIsEmpty(arr)}

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
                  arrIsEmpty(<b>{parseString[item] ? (toString(item) || 'undefined') : JSON.stringify(item)}</b>)
                </span>
                <span>
                  {` // ${toString(arrIsEmpty(item))}`}
                </span>
              </div>
            );
          })
        }
      </div>
    </FormLabel>
  )
};

export const _arrIsEmpty = Template.bind({});
_arrIsEmpty.args = {
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

import { toString } from 'lodash';
import React from 'react';
import { objIsEmpty } from '../components/index';
import { FormLabel } from './common/Form';
import { getUtilsTitle } from './contants';

export default {
  title: getUtilsTitle('Obj Is Empty'),
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
  const obj = { a: 1 };
  return (
    <FormLabel
      codeBlock
      label={(
        <>
          {`
import { objIsEmpty } from 'bnv-utils';

objIsEmpty(${JSON.stringify(obj)})
// ${objIsEmpty(obj)}

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
                  objIsEmpty(<b>{parseString[item] ? (toString(item) || 'undefined') : JSON.stringify(item)}</b>)
                </span>
                <span>
                  {` // ${toString(objIsEmpty(item))}`}
                </span>
              </div>
            );
          })
        }
      </div>
    </FormLabel>
  )
};

export const _objIsEmpty = Template.bind({});
_objIsEmpty.args = {
  arr: [
    { a: 1 },
    {},
    [1, 2],
    [],
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

import { toString } from 'lodash';
import React from 'react';
import { objIsObject } from '../components/index';
import { FormLabel } from './common/Form';

export default {
  title: 'Utils/objIsObject',
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
  const obj = {};
  return (
    <FormLabel
      codeBlock
      label={(
        <>
          {`
import { objIsObject } from 'bnv-utils';

objIsObject(${JSON.stringify(obj)})
// ${objIsObject(obj)}

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
                  objIsObject(<b>{parseString[item] ? (toString(item) || 'undefined') : JSON.stringify(item)}</b>)
                </span>
                <span>
                  {` // ${toString(objIsObject(item))}`}
                </span>
              </div>
            );
          })
        }
      </div>
    </FormLabel>
  )
};

export const _objIsObject = Template.bind({});
_objIsObject.args = {
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

import React from 'react';
import { arrUnionBy } from '../components/index';
import { FormLabel } from './common/Form';
import { getUtilsTitle } from './contants';

export default {
  title: getUtilsTitle('Arr Union By'),
  argTypes: {
    arr: {
      control: { type: 'array' }
    },
  },
};

const Template = (args) => {
  const data = arrUnionBy(args.arr, args.arr1);
  return (
    <FormLabel
      codeBlock
      label={(
        <>
          {`
import { arrUnionBy } from 'bnv-utils';

const arr = ${JSON.stringify(args.arr, undefined, 4)};

const arr1 = ${JSON.stringify(args.arr1, undefined, 4)};

const data = arrUnionBy(arr, arr1); // [arrays] (...Array): The arrays to inspect.
          `}
        </>
      )}
    >
      <div>
        <h3>Result:</h3>
        <textarea
          readOnly
          style={{ width: 200, height: 300 }}
          value={JSON.stringify(data, undefined, 4)}
          onChange={() => { }}
        />
      </div>
    </FormLabel>
  )
};

export const _arrUnionBy = Template.bind({});
_arrUnionBy.args = {
  arr: [1, 1, 2, 2, 3, 3, 3, 'a', 'a', [1], [1], { a: 1 }, { a: 1 }, [1, { a: 1 }], [1, { a: 1 }]],
  arr1: [3, 4, 5, 5, 6, 6]
};

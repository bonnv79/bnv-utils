import React from 'react';
import { makeArray } from '../components/index';
import { FormLabel } from './common/Form';
import { getUtilsTitle } from './contants';

export default {
  title: getUtilsTitle('Make Array'),
  argTypes: {
    count: {
      control: { type: 'number' }
    },
    fill: {
      control: { type: 'text' }
    },
  },
};

const Template = (args) => {
  const data = makeArray(args.count, args.fill || null);
  return (
    <FormLabel
      codeBlock
      label={(
        <>
          {`
import { delaySearch, search } from 'bnv-utils';

const data = makeArray(${args.count}${args.fill ? `, ${args.fill}` : ''})
          `}
        </>
      )}
    >
      <textarea
        style={{ width: 200, height: 300 }}
        value={JSON.stringify(data, undefined, 4)}
        onChange={() => { }}
      />
    </FormLabel>
  )
};

export const _makeArray = Template.bind({});
_makeArray.args = {
  count: 10,
  fill: ''
};

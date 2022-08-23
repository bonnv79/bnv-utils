import React from 'react';
import { numberDecimal } from '../components/index';
import { FormLabel } from './common/Form';
import { getUtilsTitle } from './contants';

export default {
  title: getUtilsTitle('Number Decimal'),
  argTypes: {
    value: {
      control: { type: 'number' }
    },
    decimal: {
      control: { type: 'number' }
    },
  },
};

const Template = ({ value, decimal }) => {
  const decimalValue = numberDecimal(value, decimal);

  return (
    <FormLabel
      codeBlock
      label={(
        <>
          {`
import { numberDecimal } from 'bnv-utils';

// Usage Example
const decimalValue = numberDecimal(value, decimal);
          `}
        </>
      )}
    >
      <FormLabel label='numberDecimal' inline>
        {decimalValue}
      </FormLabel>
    </FormLabel>
  )
};

export const _numberDecimal = Template.bind({});
_numberDecimal.args = {
  value: 10,
  decimal: 2,
};

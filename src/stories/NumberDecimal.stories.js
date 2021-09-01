import React from 'react';
import { numberDecimal } from '../components/index';
import { FormLabel } from './common/Form';

export default {
  title: 'Utils/Numberdecimal',
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

export const Numberdecimal = Template.bind({});
Numberdecimal.args = {
  value: 10,
  decimal: 2,
};

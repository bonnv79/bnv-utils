import React from 'react';
import { LOCALES, makeNumberFormat } from '../components/index';
import { Container, FormLabel } from './common/Form';

export default {
  title: 'Utils/makeNumberFormat',
  argTypes: {
    value: {
      control: { type: 'number' }
    },
    min: {
      control: { type: 'number' }
    },
    max: {
      control: { type: 'number' }
    },
  },
};

const Template = ({ min, max, value }) => {
  const numberFormatEnUS = makeNumberFormat(min, max, LOCALES.enUS);
  const numberFormatDeDE = makeNumberFormat(min, max, LOCALES.deDE);

  const formatEnUSValue = numberFormatEnUS(value);
  const formatDeDEValue = numberFormatDeDE(value);

  return (
    <FormLabel
      codeBlock
      label={(
        <>
          {`
import { LOCALES, makeNumberFormat, numberDecimal } from 'bnv-utils';

const numberFormatEnUS = makeNumberFormat(min, max, LOCALES.enUS);
const numberFormatDeDE = makeNumberFormat(min, max, LOCALES.deDE);

// Usage Example
const formatEnUSValue = numberFormatEnUS(value);
const formatDeDEValue = numberFormatDeDE(value);
          `}
        </>
      )}
    >
      <Container>
        <FormLabel label='makeNumberFormat by en-US' inline>
          {formatEnUSValue}
        </FormLabel>

        <FormLabel label='makeNumberFormat by de-DE' inline>
          {formatDeDEValue}
        </FormLabel>
      </Container>
    </FormLabel>
  )
};

export const _makeNumberFormat = Template.bind({});
_makeNumberFormat.args = {
  value: 10,
  min: 2,
  max: ''
};

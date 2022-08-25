import React from 'react';
import { calc } from '../components/index';
import { FormLabel } from './common/Form';
import { getUtilsTitle } from './contants';

export default {
  title: getUtilsTitle('Calc'),
  argTypes: {

  },
};

const Template = (args) => {
  return (
    <FormLabel
      codeBlock
      label={(
        <>
          {`
import { calc } from 'bnv-utils';

calc.sum(1, 2, 3)
// ${calc.sum(1, 2, 3)}

calc.sum([1], [2, 3])
// ${calc.sum([1], [2, 3])}

calc.sub(1, 2, 3)
// ${calc.sub(1, 2, 3)}

calc.sub([1], [2, 3])
// ${calc.sub([1], [2, 3])}

calc.mul(2, 3, 4)
// ${calc.mul(2, 3, 4)}

calc.mul([2], [3, 4])
// ${calc.mul([2], [3, 4])}

calc.div(10, 2, 5)
// ${calc.div(10, 2, 5)}

calc.div([10], [2, 5])
// ${calc.div([10], [2, 5])}

calc.mod(1, 2, 3)
// ${calc.mod(1, 2, 3)}

calc.mod([1], [2, 3])
// ${calc.mod([1], [2, 3])}

          `}
        </>
      )}
    >
      <div>

      </div>
    </FormLabel>
  )
};

export const _Calc = Template.bind({});
_Calc.args = {

};

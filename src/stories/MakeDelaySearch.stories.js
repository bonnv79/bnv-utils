import React from 'react';
import { delaySearch, search } from '../components/index';
import { Container, FormLabel } from './common/Form';
import { getUtilsTitle } from './contants';

export default {
  title: getUtilsTitle('Delay Search'),
  argTypes: {
  },
};

const data = [];

for (let i = 1; i < 20; i += 1) {
  data.push({
    id: i,
    name: `name ${i}`
  });
}

const Template = () => {
  const [searchKey, setSearchKey] = React.useState('');
  const [searchKey1, setSearchKey1] = React.useState('');

  const handleSearch = (e) => {
    const val = e.target.value;
    setSearchKey(val);

    delaySearch(() => {
      setSearchKey1(val);
    })
  }

  return (
    <FormLabel
      codeBlock
      label={(
        <>
          {`
import { delaySearch, search } from 'bnv-utils';

<input 
  value={searchKey}
  onChange={e => {
    delaySearch(() => {
      setSearchKey(e.target.value);
    })
  }} 
/>

const filterData = data.filter(item => search(item.name, searchKey));
          `}
        </>
      )}
    >
      <Container>
        <Container inline>
          <FormLabel label='Search:' inline>
            <input value={searchKey} onChange={handleSearch} />
          </FormLabel>
          <FormLabel label='Search Value:' inline>
            {searchKey1}
          </FormLabel>
        </Container>
        <table style={{ borderCollapse: 'collapse' }}>
          <tbody>
            {
              data.filter(item => search(item.name, searchKey1)).map(item => (
                <tr key={item.id}>
                  <td style={{ border: '1px solid black', padding: '0 5px' }}>{item.id}</td>
                  <td style={{ border: '1px solid black', padding: '0 5px' }}>{item.name}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </Container>
    </FormLabel>
  )
};

export const _delaySearch = Template.bind({});
_delaySearch.args = {
};

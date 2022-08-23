# bnv-utils

> bnv-utils

[![NPM](https://img.shields.io/npm/v/bnv-utils.svg)](https://www.npmjs.com/package/bnv-utils) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save bnv-utils
```

## Demo
Demo and playground are available [here](https://bonnv79.github.io/bnv-utils/)

## Usage test
<a href="https://codesandbox.io/s/bnv-utils-x24mhw">CodeSandbox</a>

## Versions
[CHANGELOG](CHANGELOG.md)

## Usage Example
```JavaScript
import React from 'react';
import { makeArray } from 'bnv-utils';

const Demo = () => {
  const data = makeArray(10);
  return (
    <div>
      {JSON.stringify(data, undefined, 4)}
    </div>
  );
};
```

## Develop

In the project directory, you can run:

### `npm install`
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## License

MIT © [bonnv79](https://github.com/bonnv79)

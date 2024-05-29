# react-ant-textarea-lines
> Get lines with textarea for antd.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-ant-textarea-lines
```

## usage
1. import css
  ```scss
  @import "~@jswork/react-ant-textarea-lines/dist/style.css";

  // or use sass
  @import "~@jswork/react-ant-textarea-lines/dist/style.scss";
  ```
2. import js
  ```js
  import React, { useState } from 'react';
  import { Button } from 'antd';
  import 'antd/dist/reset.css';
  import ReactAntTextareaLines from '@jswork/react-ant-textarea-lines';

  // import '@jswork/react-ant-textarea-lines/dist/style.scss';

  function App() {
    const value = ['https://www.baidu.com', 'https://ant.design/docs/react/introduce-cn'];
    const [val, setVal] = useState(value);

    return (
      <div
        className="p-5 bg-slate-50 wp-5 mt-20 mx-auto rounded-lg border border-solid border-slate-200 hover:border-slate-300 hover:bg-slate-100 transition-all duration-200">
        <h1>react-ant-textarea-lines</h1>
        <ReactAntTextareaLines
          className="mb-5"
          placeholder="请输入内容"
          autoSize={{ minRows: 3, maxRows: 6 }}
          value={val}
          onChange={(e) => {
            setVal(e.target.value);
            // console.log('ex:', e.target.value);
          }}
        />
        <Button
          type="primary"
          onClick={(e) => {
            console.log('set value');
            setVal([
              'https://babeljs.io/repl',
              'https://ourcodeworld.com/articles/read/309/top-5-best-code-editor-plugins-written-in-javascript',
            ]);
          }}>
          SetValue
        </Button>
      </div>
    );
  }

  export default App;
  ```

## preview
- https://afeiship.github.io/react-ant-textarea-lines/

## license
Code released under [the MIT license](https://github.com/afeiship/react-ant-textarea-lines/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-ant-textarea-lines
[version-url]: https://npmjs.org/package/@jswork/react-ant-textarea-lines

[license-image]: https://img.shields.io/npm/l/@jswork/react-ant-textarea-lines
[license-url]: https://github.com/afeiship/react-ant-textarea-lines/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-ant-textarea-lines
[size-url]: https://github.com/afeiship/react-ant-textarea-lines/blob/master/dist/react-ant-textarea-lines.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-ant-textarea-lines
[download-url]: https://www.npmjs.com/package/@jswork/react-ant-textarea-lines

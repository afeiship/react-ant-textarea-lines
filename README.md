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

  // customize your styles:
  $react-ant-textarea-lines-options: ()
  ```
2. import js
  ```js
  import React, { useState } from 'react';
  import ReactAntTextareaLines from '@jswork/react-ant-textarea-lines';
  import styled from 'styled-components';
  import { Button } from 'antd';

  const Container = styled.div`
    width: 80%;
    margin: 30px auto 0;
    p{
      margin: 10px auto;
    }
  `;

  const value = ['https://www.baidu.com', 'https://ant.design/docs/react/introduce-cn'];

  export default (props: any) => {
    const [val, setVal] = useState(value);
    return (
      <Container>
        <ReactAntTextareaLines
          value={val}
          onChange={(e) => {
            setVal(e.target.value)
            // console.log('ex:', e.target.value);
          }}
        />

        <p>
          <Button
            type="primary"
            onClick={(e) => {
              console.log('set value');
              setVal(
                ['https://babeljs.io/repl', 'https://ourcodeworld.com/articles/read/309/top-5-best-code-editor-plugins-written-in-javascript']
              )
            }}>
            SetValue
          </Button>
        </p>
      </Container>
    );
  };

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

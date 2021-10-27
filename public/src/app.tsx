import React, { useState } from 'react';
import ReactAntTextareaLines from '../../src/main';
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

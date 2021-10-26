import React from 'react';
import ReactAntTextareaLines from '../../src/main';
import styled from 'styled-components';

const Container = styled.div`
  width: 80%;
  margin: 30px auto 0;
`;
const value = ['https://www.baidu.com', 'https://ant.design/docs/react/introduce-cn'];

export default (props: any) => {
  return (
    <Container>
      <ReactAntTextareaLines
        value={value}
        onChange={(e) => {
          console.log('ex:', e.target.value);
        }}
      />
    </Container>
  );
};

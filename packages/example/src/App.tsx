import React, { useState } from 'react';
import { Button } from 'antd';
import ReactAntTextareaLines from '../../lib/src';
// import '@jswork/react-ant-textarea-lines/src/style.scss';
import 'antd/dist/reset.css';
import './App.css';

function App() {
  const value = ['https://www.baidu.com', 'https://ant.design/docs/react/introduce-cn'];
  const [val, setVal] = useState(value);

  return (
    <>
      <h1>react-ant-textarea-lines</h1>
      <ReactAntTextareaLines
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
          // console.log('ex:', e.target.value);
        }}
      />

      <p>
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
      </p>
    </>
  );
}

export default App;

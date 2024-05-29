import React, { useState } from 'react';
import { Button } from 'antd';
import 'antd/dist/reset.css';
import ReactAntTextareaLines from '@jswork/react-ant-textarea-lines/src';

// import '@jswork/react-ant-textarea-lines/src/style.scss';

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
          console.log('ex:', e.target.value);
        }}
      />
      <Button
        type="primary"
        onClick={() => {
          setVal([
            'https://www.baidu.com',
            'https://www.google.com',
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

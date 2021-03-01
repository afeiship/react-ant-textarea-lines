import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactProgress from '../src/main';
import './assets/style.scss';

class App extends React.Component {
  get items() {
    return Array.from(Array(10).keys());
  }

  render() {
    return (
      <ReactDemokit
        className="p-3 app-container"
        url="https://github.com/afeiship/react-progress">
        <article className="message is-info">
          <div className="message-header">Preview:</div>
          <div className="message-body">
            <h3 className="mb-3">
              <center className="button is-primary">Progress bar</center>
            </h3>
            {this.items.map((item) => {
              return (
                <ReactProgress
                  className="mb-2"
                  key={item}
                  value={item * 10 + 10}
                />
              );
            })}
          </div>
        </article>
      </ReactDemokit>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

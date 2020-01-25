import ReactProgress from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/style.scss';

class App extends React.Component {
  get items() {
    return Array.from(Array(10).keys());
  }

  render() {
    return (
      <div className="app-container">
        <h3>
          <center>Progress bar</center>
        </h3>
        {this.items.map((item) => {
          return <ReactProgress key={item} value={item * 10 + 10} />;
        })}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

# react-progress
> Progress for react.

## installation
```shell
npm install -S @feizheng/react-progress
```

## update
```shell
npm update @feizheng/react-progress
```

## properties
| property  | type   | default | description |
| --------- | ------ | ------- | ----------- |
| className | String | -       | -           |
| value     | Number | 0       | -           |
| max       | Number | 100     | -           |
| color     | String | #419bf9 | -           |

## usage
1. import css
  ```scss
  @import "~@feizheng/react-progress/dist/style.scss";

  // customize your styles:
  $react-progress-options: ()
  ```
2. import js
  ```js
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
  ```

## documentation
- https://afeiship.github.io/react-progress/

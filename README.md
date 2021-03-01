# react-progress
> Progress for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-progress
```

## properties
| Name      | Type   | Required | Default   | Description                           |
| --------- | ------ | -------- | --------- | ------------------------------------- |
| className | string | false    | -         | The extended className for component. |
| color     | string | false    | '#419bf9' | The highlight body color.             |
| value     | number | false    | 0         | The progress value.                   |
| max       | number | false    | 100       | The max limit value.                  |


## usage
1. import css
  ```scss
  @import "~@jswork/react-progress/dist/style.css";

  // or use sass
  @import "~@jswork/react-progress/dist/style.scss";

  // customize your styles:
  $react-progress-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactProgress from '@jswork/react-progress';
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

  ```

## documentation
- https://afeiship.github.io/react-progress/


## license
Code released under [the MIT license](https://github.com/afeiship/react-progress/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-progress
[version-url]: https://npmjs.org/package/@jswork/react-progress

[license-image]: https://img.shields.io/npm/l/@jswork/react-progress
[license-url]: https://github.com/afeiship/react-progress/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-progress
[size-url]: https://github.com/afeiship/react-progress/blob/master/dist/react-progress.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-progress
[download-url]: https://www.npmjs.com/package/@jswork/react-progress

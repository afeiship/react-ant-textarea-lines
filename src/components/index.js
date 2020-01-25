import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';

const CLASS_NAME = 'react-progress';

export default class extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    className: PropTypes.string,
    color: PropTypes.string,
    value: PropTypes.number,
    max: PropTypes.number
  };

  static defaultProps = {
    color: '#419bf9',
    value:0,
    max: 100
  };

  get width() {
    const { value, max } = this.props;
    return (100 * value) / max + '%';
  }

  render() {
    const { className, color, max, value, ...props } = this.props;
    return (
      <div
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        {...props}>
        <div
          className="is-inner"
          style={{
            backgroundColor: color,
            width: this.width
          }}></div>
      </div>
    );
  }
}

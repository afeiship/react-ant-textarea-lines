import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CLASS_NAME = 'react-progress';

export default class ReactProgress extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * The highlight body color.
     */
    color: PropTypes.string,
    /**
     * The progress value.
     */
    value: PropTypes.number,
    /**
     * The max limit value.
     */
    max: PropTypes.number
  };

  static defaultProps = {
    color: '#419bf9',
    value: 0,
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
          className={`${CLASS_NAME}__body`}
          style={{
            backgroundColor: color,
            width: this.width
          }}></div>
      </div>
    );
  }
}

import noop from '@jswork/noop';
import React, { Component } from 'react';
import { Input } from 'antd';

const CLASS_NAME = 'react-ant-textarea-lines';
const isEqual = (v1, v2) => {
  return v1.join() === v2.join();
};

interface EventTarget {
  target: {
    value: any;
  };
}

export type ReactAntTextareaLinesProps = {
  /**
   * Default runtime value.
   */
  value?: string[];
  /**
   * The change handler.
   */
  onChange?: (event: EventTarget) => void;
};

export default class ReactAntTextareaLines extends Component<ReactAntTextareaLinesProps, any> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    onChange: noop
  };

  state = {
    value: this.props.value
  };

  shouldComponentUpdate(inProps) {
    const { value } = inProps;
    if (!isEqual(value, this.state.value)) {
      this.setState({ value });
    }
    return true;
  }

  handleChange = (inEvent) => {
    const { value } = inEvent.target;
    const { onChange } = this.props;
    const _value = value.split('\n');
    const target = { value: _value };
    this.setState(target, () => {
      onChange!({ target });
    });
  };

  render() {
    const { value, onChange, ...props } = this.props;
    const _value = this.state.value;
    return (
      <Input.TextArea autoSize value={_value!.join('\n')} onChange={this.handleChange} {...props} />
    );
  }
}

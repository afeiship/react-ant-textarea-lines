import noop from '@jswork/noop';
import React, { Component } from 'react';
import { Input } from 'antd';

const CLASS_NAME = 'react-ant-textarea-lines';

interface EventTarget {
  target: {
    value: any;
  }
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
    value: this.props.value?.join('\n')
  }


  handleChange = (inEvent) => {
    const { value } = inEvent.target;
    const { onChange } = this.props;
    this.setState({ value }, () => {
      onChange!({
        target: {
          value: value.trim().split('\n').filter(Boolean)
        }
      });
    })
  };

  render() {
    const { value, onChange, ...props } = this.props;
    const _value = this.state.value;
    return (
      <Input.TextArea autoSize value={_value} onChange={this.handleChange} {...props} />
    );
  }
}

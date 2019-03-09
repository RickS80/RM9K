import React, { Component } from 'react';
import CustomerModalTrigger from './CustomerModalTrigger';
import './CustomerModalTrigger.css';

class CustomerModal extends Component {
  render() {
    const { triggerText } = this.props;
    return (
      <CustomerModalTrigger text={triggerText} />
    );
  }
}

export default CustomerModal;
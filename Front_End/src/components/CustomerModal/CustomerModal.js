import React, { Component, Fragment } from 'react';
import CustomerModalTrigger from './CustomerModalTrigger';
import './CustomerModalTrigger.css';
import CustomerModalContent from './CustomerModalContent';

class CustomerModal extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false
    };
  }

  onOpen = () => {
    this.setState({ isOpen: true });
  }

  onClose = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen } = this.state;
    const { triggerText } = this.props;
    return (
      <Fragment>
        <CustomerModalTrigger 
          onOpen={this.onOpen}
          buttonText={triggerText}
        />

        {(isOpen) &&
          <CustomerModalContent 
            onClose={this.onClose}
          />
        }
      </Fragment>
    );
  }
}

export default CustomerModal;
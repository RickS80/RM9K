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

  onKeyDown = (evt) => {
    return evt.keyCode === 27 && this.onClose();
  }

  onClickAway = (evt) => {
    if (this.modalNode && this.modalNode.contains(evt.target)) return;
    this.onClose();
  }

  render() {
    const { isOpen } = this.state;
    const { triggerText, role } = this.props;
    return (
      <Fragment>
        <CustomerModalTrigger 
          onOpen={this.onOpen}
          buttonText={triggerText}
        />

        {(isOpen) &&
          <CustomerModalContent 
            onClose={this.onClose}
            onKeyDown={this.onKeyDown}
            modalRef={n => this.modalNode = n}
            onClickAway={this.onClickAway}
            role={role}
          />
        }
      </Fragment>
    );
  }
}

export default CustomerModal;
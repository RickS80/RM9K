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
    this.setState({ isOpen: true }, () => {
      this.closeButtonNode.focus(); // draw keyboard focus to the modal when opens
    });
    this.toggleScrollLock();
  };

  onClose = () => {
    this.setState({ isOpen: false });
    this.openButtonNode.focus(); // return keyboard focus to main page when close
    this.toggleScrollLock();
  };

  onKeyDown = (evt) => {
    return evt.keyCode === 27 && this.onClose();
  }

  onClickAway = (evt) => {
    if (this.modalNode && this.modalNode.contains(evt.target)) return;
    this.onClose();
  }

  toggleScrollLock = () => document.querySelector('html').classList.toggle('u-lock-scroll');

  render() {
    const { isOpen } = this.state;
    const { triggerText, role } = this.props;
    return (
      <Fragment>
        <CustomerModalTrigger
          onOpen={this.onOpen}
          buttonRef={n => this.openButtonNode = n}
          text={triggerText}
        />

        {isOpen && (
          <CustomerModalContent
            buttonRef={n => (this.closeButtonNode = n)}
            onClose={this.onClose}
            onKeyDown={this.onKeyDown}
            modalRef={n => (this.modalNode = n)}
            onClickAway={this.onClickAway}
            role={role}
          />
        )}
      </Fragment>
    );
  }
}

export default CustomerModal;
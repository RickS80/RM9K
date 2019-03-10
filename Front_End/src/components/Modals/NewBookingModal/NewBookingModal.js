import React, { Component, Fragment } from 'react';
import NewBookingModalContent from './NewBookingModalContent'
import NewBookingModalTrigger from './NewBookingModalTrigger';

class NewBookingModal extends Component {
  constructor(props) {
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

  onKeyDown = evt => {
    return evt.keyCode === 27 && this.onClose();
  };

  onClickAway = evt => {
    if (this.modalNode && this.modalNode.contains(evt.target)) return;
    this.onClose();
  };

  handleSubmit = evt => {
    evt.preventDefault();
    console.log(evt)
    // posting data happens here
  }

  toggleScrollLock = () => document.querySelector("html").classList.toggle("u-lock-scroll");

  render() {
    const { isOpen } = this.state;
    const { triggerText, role } = this.props;
    return (
      <Fragment>
        <NewBookingModalTrigger
          buttonRef={n => (this.openButtonNode = n)}
          buttonText={triggerText}
          onOpen={this.onOpen}
        />

        {isOpen && (
          <NewBookingModalContent
            buttonRef={n => (this.closeButtonNode = n)}
            handleSubmit={this.handleSubmit}
            modalRef={n => (this.modalNode = n)}
            onClickAway={this.onClickAway}
            onClose={this.onClose}
            onKeyDown={this.onKeyDown}
            role={role}
          />
        )}
      </Fragment>
    );
  }
}
 
export default NewBookingModal;
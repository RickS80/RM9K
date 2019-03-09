import React, { Component } from 'react';
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

  render() {
    const { isOpen } = this.state;
    const { triggerText, role } = this.props;
    return (
      <React.Fragment>
        <NewBookingModalTrigger
          onOpen={this.onOpen}
          buttonRef={n => (this.openButtonNode = n)}
          buttonText={triggerText}
        />

        {isOpen && <NewBookingModalContent />}
      </React.Fragment>
    );
  }
}
 
export default NewBookingModal;
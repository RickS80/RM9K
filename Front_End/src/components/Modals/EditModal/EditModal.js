import React, { Component, Fragment } from 'react';
import EditModalTrigger from './EditModalTrigger';
import EditModalContent from './EditModalContent';

class EditModal extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
      bookingSelected: null
    };
    // this.foundThat = this.foundThat.bind(this)
  }

  foundThat = () =>{
    const bookingFound =  this.props.bookings.find((booking) => {
      return booking.id === this.props.idOfEdit
  })
  this.setState({bookingSelected: bookingFound})
}


  onOpen = () => {
    this.setState({ isOpen: true }, () => {
    //   this.closeButtonNode.focus(); // draw keyboard focus to the modal when opens
    });
    this.toggleScrollLock();
    this.foundThat()
  };

  onClose = () => {
    this.setState({ isOpen: false });
    // this.openButtonNode.focus(); // return keyboard focus to main page when close
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




  render(){

    return(
        <React.Fragment>
            <EditModalTrigger
            buttonRef={n => (this.openButtonNode = n)}
            buttonText="pizza"
            onOpen={this.onOpen}/>

            {this.state.isOpen && (
            <EditModalContent
            buttonRef={n => (this.closeButtonNode = n)}
            modalRef={n => (this.modalNode = n)}
            onClickAway={this.onClickAway}
            onClose={this.onClose}
            onKeyDown={this.onKeyDown}
            bookingSelected = {this.state.bookingSelected}
            role="pizza"/>)}
        </React.Fragment>
    )
  }


}


export default EditModal;
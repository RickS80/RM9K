import React, { Component } from 'react';
import NewBookingModalContent from './NewBookingModalContent'
import NewBookingModalTrigger from './NewBookingModalTrigger';

class NewBookingModal extends Component {
  constructor(props) {
    super(props);
    this.state = { 

     }
  }


  render() { 
    return ( 
      <React.Fragment>
        <NewBookingModalTrigger/>

        <NewBookingModalContent/>
      </React.Fragment>
     );
  }
}
 
export default NewBookingModal;
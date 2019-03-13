import React, { Component, Fragment } from "react";
import NewBookingModalContent from "./NewBookingModalContent";
import NewBookingModalTrigger from "./NewBookingModalTrigger";

class NewBookingModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      tableId: null,
      customerId: null,
      customerName: null,
      customerNumber: null,
      covers: null,
      bookingDate: null,
      startTime: null
    };
    this.handleCustomerIdChange = this.handleCustomerIdChange.bind(this);
    this.handleCustomerNameChange = this.handleCustomerNameChange.bind(this);
    this.handleCustomerNumberChange = this.handleCustomerNumberChange.bind(this);
    this.handleTableIdChange = this.handleTableIdChange.bind(this);
    this.handleStartTimeChange = this.handleStartTimeChange.bind(this);
    this.handleCoverChange = this.handleCoverChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.findCustomerInArray = this.findCustomerInArray.bind(this);
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
    this.props.refreshData();
  };

  onKeyDown = evt => {
    return evt.keyCode === 27 && this.onClose();
  };

  onClickAway = evt => {
    if (this.modalNode && this.modalNode.contains(evt.target)) return;
    this.onClose();
  };

  toggleScrollLock = () =>
    document.querySelector("html").classList.toggle("u-lock-scroll");

  handleCustomerIdChange(evt) {
    this.setState({ customerId: evt.target.value });
  }

  handleCustomerNameChange(evt) {
    this.setState({ customerName: evt.target.value });
  }

  handleCustomerNumberChange(evt) {
    this.setState({ customerNumber: evt.target.value });
  }

  handleTableIdChange(evt) {
    this.setState({ tableId: evt.target.value });
  }

  handleStartTimeChange(evt) {
    this.setState({ startTime: evt.target.value });
  }

  handleDateChange(evt) {
    // change date format
    const date = evt.target.value;
    const reversedDate = date
      .split(`-`)
      .reverse()
      .join(`-`);
    this.setState({ bookingDate: reversedDate });
  }

  handleCoverChange(evt) {
    this.setState({ covers: evt.target.value });
  }

  findCustomerInArray(customerNumber, arrayOfCustomers) {
    return arrayOfCustomers.find(customer => {
      return customer.customerNumber === customerNumber
      })
    }
  
  handleSubmit(evt) {
    evt.preventDefault();
    const existingCustomer = this.findCustomerInArray(
      this.state.customerNumber,
      this.props.customers
    );
    if (existingCustomer) {
      this.setState({ customerId: existingCustomer.id }, this.makeBookingPost);
    } else {
      
      this.makeCustomerPost() // make a new customer using the data provided in form
        .then(res => res.json())
        .then(data => {
          return data.id; // retrieve new customer ID from API response
        })
        .then(
          (res)=>{this.setState({ customerId: res }, this.makeBookingPost)} // make new booking with ID
        ).then(
          (res) => this.props.refreshData() // refreshing the data to reload the table - doesn't work?
        );
    }
    this.onClose(); // close the modal
  }

  prepBookingJson() {
    const path = "http://localhost:8080";
    let newBooking = {
      customer: `${path}/customers/${this.state.customerId}`,
      restaurantTable: `${path}/restaurantTables/${this.state.tableId}`,
      date: `${this.state.bookingDate}`,
      startTime: `${this.state.startTime}`,
      covers: `${this.state.covers}`
    };
    return newBooking;
  }

  makeBookingPost() {
    const path = "http://localhost:8080";
    fetch(`${path}/bookings`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.prepBookingJson())
    });
  }

  prepCustomerJson() {
    let newCustomer = {
      customerName: `${this.state.customerName}`,
      customerNumber: `${this.state.customerNumber}`
    };
    return newCustomer;
  }

  makeCustomerPost() {
    const path = "http://localhost:8080";
    return fetch(`${path}/customers`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.prepCustomerJson())
    });
  }

  render() {
    const { isOpen } = this.state;
    const { triggerText } = this.props;
    return (
      <Fragment>
        <NewBookingModalTrigger
          buttonRef={n => (this.openButtonNode = n)}
          buttonText={triggerText}
          onOpen={this.onOpen}
        />

        {isOpen && (
          <NewBookingModalContent
            restaurantTables={this.props.restaurantTables}
            buttonRef={n => (this.closeButtonNode = n)}
            handleSubmit={this.handleSubmit}
            modalRef={n => (this.modalNode = n)}
            onClickAway={this.onClickAway}
            onClose={this.onClose}
            onKeyDown={this.onKeyDown}
            role="dialog"
            handleCustomerIdChange={this.handleCustomerIdChange}
            handleCustomerNameChange={this.handleCustomerNameChange}
            handleCustomerNumberChange={this.handleCustomerNumberChange}
            handleTableIdChange={this.handleTableIdChange}
            handleStartTimeChange={this.handleStartTimeChange}
            handleCoverChange={this.handleCoverChange}
            handleDateChange={this.handleDateChange}
          />
        )}
      </Fragment>
    );
  }
}

export default NewBookingModal;

package com.example.rm9k;


import com.example.rm9k.models.Booking;
import com.example.rm9k.models.Customer;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class CustomerTest {
    Customer customer;
    Booking booking;

    @Before
    public void before() {
        customer = new Customer ("Davide", "123345");
//        booking = new Booking();
    }


    @Test
    public void customerHasName(){
        assertEquals("Davide",customer.getCustomerName());
    }

//    @Test
//    public  void canAddBookingToCustomer(){
//        customer.addBookingToCustomer(booking);
//        assertEquals(1, customer.getCustomerBookings());
//    }



}
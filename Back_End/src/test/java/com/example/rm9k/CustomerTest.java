package com.example.rm9k;


import com.example.rm9k.models.Booking;
import com.example.rm9k.models.Customer;
import com.example.rm9k.models.RestaurantTable;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class CustomerTest {
    Customer customer;
    RestaurantTable restaurantTable;
    Booking booking;


    @Before
    public void before() {
        customer = new Customer ("Davide", "123345");
        restaurantTable = new RestaurantTable(3, 6);
        booking = new Booking(customer, restaurantTable, "12-01-2018","0900",2 );
    }


    @Test
    public void customerHasName(){
        assertEquals("Davide",customer.getCustomerName());
    }

    @Test
    public void canAddBooking(){
        customer.addBookingToCustomer(booking);
        assertEquals(1, customer.getBookingLength());
    }







}
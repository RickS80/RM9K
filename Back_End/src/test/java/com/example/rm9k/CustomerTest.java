package com.example.rm9k;


import com.example.rm9k.models.Customer;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class CustomerTest {
    Customer customer;

    @Before
    public void before() {
        customer = new Customer ("Davide", "123345");
    }


    @Test
    public void customerHasName(){
        assertEquals("Davide",customer.getCustomerName());
    }



}
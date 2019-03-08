package com.example.rm9k;


import com.example.rm9k.models.Booking;
import com.example.rm9k.models.RestaurantTable;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class RestaurantTableTest {

    RestaurantTable restaurantTable;
    Booking booking;



    @Before
    public void before(){
        restaurantTable = new RestaurantTable(3, 5);
        booking = new Booking();
    }



    @Test
    public void tableHasNumber(){
        assertEquals(3, restaurantTable.getTableNumber());
    }

    @Test
    public void tableHasCapacity(){
        assertEquals(5, restaurantTable.getCapacity());
    }

    @Test
    public void canAddBookingToTable(){
        restaurantTable.addBookingToTable(booking);
        assertEquals(1, restaurantTable.getTableBookings());

    }



}

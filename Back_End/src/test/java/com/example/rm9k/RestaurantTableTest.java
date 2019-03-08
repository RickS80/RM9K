package com.example.rm9k;


import com.example.rm9k.models.RestaurantTable;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class RestaurantTableTest {

    RestaurantTable restaurantTable;

    @Before
    public void before(){
        restaurantTable = new RestaurantTable(3, 5);
    }



    @Test
    public void tableHasNumber(){
        assertEquals(3, restaurantTable.getTableNumber());
    }

    @Test
    public void tableHasCapacity(){
        assertEquals(5, restaurantTable.getCapacity());
    }



}

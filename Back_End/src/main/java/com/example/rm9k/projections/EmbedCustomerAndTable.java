package com.example.rm9k.projections;


import com.example.rm9k.models.Booking;
import com.example.rm9k.models.Customer;
import com.example.rm9k.models.RestaurantTable;
import org.springframework.data.rest.core.config.Projection;


@Projection(name = "embedCustomerAndTable", types = Booking.class)
public interface EmbedCustomerAndTable {
    Long getId();
    Customer getCustomer();
    RestaurantTable getRestaurantTable();
    String getStartTime();
    int getCovers();
    double getTotalSpent();
}

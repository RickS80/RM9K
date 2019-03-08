package com.example.rm9k.projections;



import com.example.rm9k.models.Booking;
import com.example.rm9k.models.Customer;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;


@Projection(name = "embedBooking", types = Customer.class)
public interface EmbedBooking {
    String getCustomerName();
    String getCustomerNumber();
}

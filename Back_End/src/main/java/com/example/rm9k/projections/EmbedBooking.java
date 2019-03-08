package com.example.rm9k.projections;


import com.example.rm9k.models.Customer;
import org.springframework.data.rest.core.config.Projection;


@Projection(name = "embedBooking", types = Customer.class)
public interface EmbedBooking {
    Long getId();
    String getCustomerName();
    String getCustomerNumber();
}

package com.example.rm9k.projections;


import com.example.rm9k.models.Booking;
import org.springframework.data.rest.core.config.Projection;

@Projection(name = "embedCustomer", types = Booking.class)
public interface EmbedCustomer {

}

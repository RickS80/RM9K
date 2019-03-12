package com.example.rm9k.repositories;

import com.example.rm9k.models.Booking;
import com.example.rm9k.projections.EmbedCustomerAndTable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;


@RepositoryRestResource(excerptProjection = EmbedCustomerAndTable.class)
public interface BookingRepository extends JpaRepository<Booking, Long> {
    List<Booking> findBookingsByDate(String date);

    List<Booking> findBookingByDateAndStartTime(String date, String startTime);

}

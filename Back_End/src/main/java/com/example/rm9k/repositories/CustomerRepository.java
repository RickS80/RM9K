package com.example.rm9k.repositories;

import com.example.rm9k.models.Customer;
import com.example.rm9k.projections.EmbedBooking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


@RepositoryRestResource(excerptProjection = EmbedBooking.class)
public interface CustomerRepository extends JpaRepository<Customer, Long> {

}

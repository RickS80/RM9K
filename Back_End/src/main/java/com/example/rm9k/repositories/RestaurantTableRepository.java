package com.example.rm9k.repositories;

import com.example.rm9k.models.RestaurantTable;
import org.springframework.data.jpa.repository.JpaRepository;


public interface RestaurantTableRepository extends JpaRepository<RestaurantTable, Long> {
}

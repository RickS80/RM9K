package com.example.rm9k.components;

import com.example.rm9k.models.Booking;
import com.example.rm9k.models.Customer;
import com.example.rm9k.models.RestaurantTable;
import com.example.rm9k.repositories.BookingRepository;
import com.example.rm9k.repositories.CustomerRepository;
import com.example.rm9k.repositories.RestaurantTableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;


@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    BookingRepository bookingRepository;

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    RestaurantTableRepository restaurantTableRepository;

    public DataLoader() {
    }

    @Override
    public void run(ApplicationArguments args){
        Customer customer1 = new Customer("Kirsty", "1231235");
        customerRepository.save(customer1);
        RestaurantTable restaurantTable1 = new RestaurantTable(17, 5);
        restaurantTableRepository.save(restaurantTable1);
        Booking booking1 = new Booking(customer1, restaurantTable1);
        bookingRepository.save(booking1);
        }


    }






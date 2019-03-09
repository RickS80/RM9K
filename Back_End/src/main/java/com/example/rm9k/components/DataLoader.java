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

    @Override
    public void run(ApplicationArguments args) throws Exception{
        Customer customer1 = new Customer("Kirsty", "1231235");
        customerRepository.save(customer1);
        RestaurantTable restaurantTable1 = new RestaurantTable(17, 5);
        restaurantTableRepository.save(restaurantTable1);
        Booking booking1 = new Booking(customer1, restaurantTable1);
        bookingRepository.save(booking1);

        Customer customer2 = new Customer("Rick", "1231234");
        customerRepository.save(customer2);
        RestaurantTable restaurantTable2 = new RestaurantTable(1, 5);
        restaurantTableRepository.save(restaurantTable2);
        Booking booking2 = new Booking(customer2, restaurantTable2);
        bookingRepository.save(booking2);

        Customer customer3 = new Customer("John", "1013994");
        customerRepository.save(customer3);
        RestaurantTable restaurantTable3 = new RestaurantTable(18, 2);
        restaurantTableRepository.save(restaurantTable3);
        Booking booking3 = new Booking(customer3, restaurantTable3);
        bookingRepository.save(booking3);

        Booking booking4 = new Booking(customer2, restaurantTable1);
        bookingRepository.save(booking4);

        Booking booking5 = new Booking(customer1, restaurantTable3);
        bookingRepository.save(booking5);


        }


    }






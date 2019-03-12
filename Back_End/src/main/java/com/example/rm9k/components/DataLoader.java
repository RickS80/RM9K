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

        RestaurantTable restaurantTable1 = new RestaurantTable(1, 4);
        restaurantTableRepository.save(restaurantTable1);
        RestaurantTable restaurantTable2 = new RestaurantTable(2, 8);
        restaurantTableRepository.save(restaurantTable2);
        RestaurantTable restaurantTable3 = new RestaurantTable(3, 2);
        restaurantTableRepository.save(restaurantTable3);
        RestaurantTable restaurantTable4 = new RestaurantTable(4, 6);
        restaurantTableRepository.save(restaurantTable4);
        RestaurantTable restaurantTable5 = new RestaurantTable(5, 4);
        restaurantTableRepository.save(restaurantTable5);
        RestaurantTable restaurantTable6 = new RestaurantTable(6, 3);
        restaurantTableRepository.save(restaurantTable6);
        RestaurantTable restaurantTable7 = new RestaurantTable(7, 1);
        restaurantTableRepository.save(restaurantTable7);
        RestaurantTable restaurantTable8 = new RestaurantTable(8, 10);
        restaurantTableRepository.save(restaurantTable8);
        RestaurantTable restaurantTable9 = new RestaurantTable(9, 5);
        restaurantTableRepository.save(restaurantTable9);
        RestaurantTable restaurantTable10 = new RestaurantTable(10, 5);
        restaurantTableRepository.save(restaurantTable10);

        Customer customer1 = new Customer("Kirsty", "1231235");
        customerRepository.save(customer1);
        Customer customer2 = new Customer("Rick", "1231234");
        customerRepository.save(customer2);
        Customer customer3 = new Customer("Jonathan", "1013994");
        customerRepository.save(customer3);

        Booking booking1 = new Booking(customer1, restaurantTable1,"23-09-2019", "20:00", 4);
        bookingRepository.save(booking1);
        Booking booking2 = new Booking(customer2, restaurantTable2,"23-04-2019", "20:00", 4);
        bookingRepository.save(booking2);
        Booking booking3 = new Booking(customer3, restaurantTable3,"23-09-2019", "16:00", 3);
        bookingRepository.save(booking3);
        Booking booking4 = new Booking(customer2, restaurantTable1,"23-09-2019", "20:00", 4);
        bookingRepository.save(booking4);
        Booking booking5 = new Booking(customer1, restaurantTable3, "23-09-2019","12:00", 5);
        bookingRepository.save(booking5);


        }


    }






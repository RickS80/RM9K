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
        Customer customer3 = new Customer("John", "1013994");
        customerRepository.save(customer3);
        Customer customer4 = new Customer("Davide", "1013433");
        customerRepository.save(customer4);
        Customer customer5 = new Customer("Ebinesar", "1014565");
        customerRepository.save(customer5);

        Booking booking1 = new Booking(customer1, restaurantTable1,"14-04-2019", "12:00", 1);
        bookingRepository.save(booking1);
        Booking booking2 = new Booking(customer2, restaurantTable2,"14-04-2019", "12:00", 4);
        bookingRepository.save(booking2);
        Booking booking3 = new Booking(customer3, restaurantTable3,"14-04-2019", "16:00", 6);
        bookingRepository.save(booking3);
        Booking booking4 = new Booking(customer2, restaurantTable5,"14-04-2019", "19:00", 4);
        bookingRepository.save(booking4);
        Booking booking5 = new Booking(customer1, restaurantTable4, "14-04-2019","15:00", 5);
        bookingRepository.save(booking5);
        Booking booking6 = new Booking(customer5, restaurantTable10,"14-04-2019", "20:00", 5);
        bookingRepository.save(booking6);
        Booking booking7 = new Booking(customer4, restaurantTable8,"14-04-2019", "20:00", 10);
        bookingRepository.save(booking7);
        Booking booking8 = new Booking(customer5, restaurantTable7,"14-04-2019", "16:00", 2);
        bookingRepository.save(booking8);
        Booking booking9 = new Booking(customer2, restaurantTable9,"14-04-2019", "19:00", 4);
        bookingRepository.save(booking9);
        Booking booking10 = new Booking(customer1, restaurantTable6, "14-04-2019","15:00", 5);
        bookingRepository.save(booking10);


        Booking booking11 = new Booking(customer1, restaurantTable1,"15-04-2019", "13:00", 1);
        bookingRepository.save(booking11);
        Booking booking12 = new Booking(customer2, restaurantTable2,"15-04-2019", "12:00", 4);
        bookingRepository.save(booking12);
        Booking booking13 = new Booking(customer3, restaurantTable3,"15-04-2019", "15:00", 6);
        bookingRepository.save(booking13);
        Booking booking14 = new Booking(customer2, restaurantTable5,"15-04-2019", "19:00", 4);
        bookingRepository.save(booking14);
        Booking booking15 = new Booking(customer1, restaurantTable4, "15-04-2019","16:00", 5);
        bookingRepository.save(booking15);
        Booking booking16 = new Booking(customer5, restaurantTable10,"15-04-2019", "12:00", 5);
        bookingRepository.save(booking16);
        Booking booking17 = new Booking(customer4, restaurantTable1,"15-04-2019", "20:00", 10);
        bookingRepository.save(booking17);
        Booking booking18 = new Booking(customer5, restaurantTable7,"15-04-2019", "16:00", 2);
        bookingRepository.save(booking18);
        Booking booking19 = new Booking(customer2, restaurantTable9,"15-04-2019", "19:00", 4);
        bookingRepository.save(booking19);
        Booking booking20 = new Booking(customer1, restaurantTable2, "15-04-2019","15:00", 5);
        bookingRepository.save(booking20);



    }


    }






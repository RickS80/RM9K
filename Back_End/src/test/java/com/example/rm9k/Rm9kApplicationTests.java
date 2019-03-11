package com.example.rm9k;

import com.example.rm9k.models.Booking;
import com.example.rm9k.models.Customer;
import com.example.rm9k.models.RestaurantTable;
import com.example.rm9k.repositories.BookingRepository;
import com.example.rm9k.repositories.CustomerRepository;
import com.example.rm9k.repositories.RestaurantTableRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class Rm9kApplicationTests {

	@Autowired
	CustomerRepository customerRepository;

	@Autowired
	RestaurantTableRepository restaurantTableRepository;

	@Autowired
	BookingRepository bookingRepository;

	@Test
	public void contextLoads() {
	}

	@Test
	public void canCreateCustomer(){
		Customer customer = new Customer("Kirsty", "1231235");
		customerRepository.save(customer);
	}

	@Test
	public void canCreateRestaurantTable(){
		RestaurantTable restaurantTable = new RestaurantTable(17, 5);
		restaurantTableRepository.save(restaurantTable);

	}

	@Test
	public void canCreateBooking(){
		Customer customer = new Customer("Kirsty", "1231235");
		customerRepository.save(customer);
		RestaurantTable restaurantTable = new RestaurantTable(17, 5);
		restaurantTableRepository.save(restaurantTable);
		Booking booking = new Booking(customer, restaurantTable, "1900", 3);
		bookingRepository.save(booking);
	}

}

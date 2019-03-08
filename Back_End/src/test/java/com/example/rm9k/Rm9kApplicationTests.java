package com.example.rm9k;

import com.example.rm9k.models.Customer;
import com.example.rm9k.repositories.CustomerRepository;
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

	@Test
	public void contextLoads() {
	}

	@Test
	public void canCreateCustomer(){
		Customer customer = new Customer("Kirsty", "1231235");
		customerRepository.save(customer);
	}

}

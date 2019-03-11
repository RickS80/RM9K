package com.example.rm9k.controllers;

import com.example.rm9k.repositories.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin
@RequestMapping("/bookings")
public class BookingController {

    @Autowired
    BookingRepository bookingRepository;
}

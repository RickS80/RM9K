package com.example.rm9k.controllers;

import com.example.rm9k.models.Booking;
import com.example.rm9k.repositories.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/bookings")
public class BookingController {

    @Autowired
    BookingRepository bookingRepository;

    @GetMapping("/date/{date}")
    public List<Booking> findBookingsByDate(@PathVariable String date){
        return bookingRepository.findBookingsByDate(date);
    }

    @PostMapping("/")
    public Booking addBooking(@RequestBody Booking booking){
        return null;
    }




}

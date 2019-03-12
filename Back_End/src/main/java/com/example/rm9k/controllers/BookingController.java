package com.example.rm9k.controllers;

import com.example.rm9k.models.Booking;
import com.example.rm9k.models.RestaurantTable;
import com.example.rm9k.repositories.BookingRepository;
import com.example.rm9k.repositories.RestaurantTableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.*;

import java.awt.print.Book;
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
//
    @GetMapping("/date/{date}/startTime/{startTime}/restaurantTable/{restaurantTable}")
    public List<Booking> findBookingByDateAndStartTimeAndRestaurantTable
        (@PathVariable String date, @PathVariable String startTime, @PathVariable RestaurantTable restaurantTable){
        //need to be able to pull a restaurantTable object out of database, using the id number given above.



//        RestaurantTable restaurantTable = RestaurantTableRepository.getTable ?????????

        //then use the table object to run the find query
        return bookingRepository.findBookingByDateAndStartTimeAndRestaurantTable(date, startTime, restaurantTable);
    }

    @PostMapping
    public Booking addBooking(@RequestBody Booking booking){
        return null;
    }




}

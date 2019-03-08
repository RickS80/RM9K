package com.example.rm9k.models;

import javax.persistence.*;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="tables")


public class RestaurantTable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @Column(name = "table_number")
    private  int tableNumber;

    @Column(name = "capacity")
    private int capacity;

    @OneToMany(mappedBy = "restaurantTable")
    private List<Booking> bookings;


    public RestaurantTable(int tableNumber, int capacity) {
        this.tableNumber = tableNumber;
        this.capacity = capacity;
        this.bookings = new ArrayList<>();
    }

    public RestaurantTable(){

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getTableNumber() {
        return tableNumber;
    }

    public void setTableNumber(int tableNumber) {
        this.tableNumber = tableNumber;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public void addBookingToTable(Booking booking){
        this.bookings.add(booking);
    }

    public int getTableBookings(){
        return this.bookings.size();
    }




}
package com.example.rm9k.models;

import javax.persistence.*;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="customers")



public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "customer_name")
    private String customerName;

    @Column(name ="customer_contact")
    private String customerNumber;

    @OneToMany(mappedBy = "customer")
    private List<Booking> bookings;

    public Customer(String customerName, String customerNumber) {
        this.customerName = customerName;
        this.customerNumber = customerNumber;
        this.bookings = new ArrayList<>();
    }

    public Customer(){
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCustomerName() {
        return customerName;
    }


    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }


    public String getCustomerNumber() {
        return customerNumber;
    }

    public void setCustomerNumber(String customerNumber) {
        this.customerNumber = customerNumber;
    }

    public void addBookingToCustomer(Booking booking){
        this.bookings.add(booking);
    }

    public int getCustomerBookings(){
        return this.bookings.size();
    }

}



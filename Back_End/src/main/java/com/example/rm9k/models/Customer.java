package com.example.rm9k.models;

import javax.persistence.*;
import javax.persistence.Table;

@Entity
@Table(name="customers")



public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "customer_name")
    private String customerName;


    public Customer(String customerName) {
        this.customerName = customerName;
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
}



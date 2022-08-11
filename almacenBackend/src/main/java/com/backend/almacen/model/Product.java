package com.backend.almacen.model;

import lombok.Data;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "product")
@Data
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String description;
    @Column(name = "original_price")
    private BigDecimal originalPrice;
    @Column(name = "discounted_price")
    private BigDecimal discountedPrice;
    private Long stock;

}

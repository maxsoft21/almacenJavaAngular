package com.backend.almacen.model;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.math.BigDecimal;
import java.util.Date;

@Entity
@Table(name = "product")
@Data
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank
    @Column(name = "nombre")
    private String name;
    @Column(name = "precio")
    private BigDecimal price;
    @Column(name = "fecha")
    private Date date;
    @Column(name = "direccion")
    private String address;
    @Column(name = "ubicacion")
    private String location;

}

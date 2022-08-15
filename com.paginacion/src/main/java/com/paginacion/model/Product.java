package com.paginacion.model;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Date;

@Data
@Entity
@Table(name = "Producto")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank
    @Column(name = "nombre")
    private String name;
    @Column(name = "precio")
    private float price;
    @Column(name = "fecha")
    private Date date;
    @Column(name = "direccion")
    private String address;
    @Column(name = "ubicacion")
    private String location;
}

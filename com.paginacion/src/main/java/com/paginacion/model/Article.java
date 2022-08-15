package com.paginacion.model;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Date;

@Data
@Entity
@Table(name = "Articulo")
public class Article {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idArticulo;
    @NotBlank
    private String nombre;
    private float precio;
    private float costo;
    private Date fechaRegistro;
}

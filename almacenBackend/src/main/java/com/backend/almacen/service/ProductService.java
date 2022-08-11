package com.backend.almacen.service;

import com.backend.almacen.dto.ResponsePaginationDto;
import com.backend.almacen.model.Product;

import java.util.Optional;

public interface ProductService {
    ResponsePaginationDto getProducts(int page, int size);
    Iterable<Product> findAll();
    Product save(Product product);
    Optional<Product> findById(int id);
    Product delete(int id);

}

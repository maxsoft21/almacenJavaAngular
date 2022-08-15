package com.backend.almacen.service;

import com.backend.almacen.dto.ResponsePaginationDto;
import com.backend.almacen.model.Product;
import org.springframework.data.domain.Page;

import java.util.Optional;

public interface ProductService {
    ResponsePaginationDto getProducts(int page, int size);
    Page<Product> getAllProducts(Integer page, Integer size, Boolean enablePagination);
    Product save(Product product);
    Optional<Product> findById(int id);
    Product delete(int id);

}

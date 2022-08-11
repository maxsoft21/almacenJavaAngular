package com.backend.almacen.service;

import com.backend.almacen.dto.ResponsePaginationDto;
import com.backend.almacen.model.Product;
import com.backend.almacen.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ProductServiceImpl implements ProductService{
    @Autowired
    private ProductRepository productRepository;
    @Override
    public ResponsePaginationDto getProducts(int page, int size) {
        Pageable paging = PageRequest.of(page-1, size);
        Page<Product> resultPage = productRepository.findAll(paging);
        ResponsePaginationDto responsePaginationDto = new ResponsePaginationDto();
        responsePaginationDto.setData(resultPage.getContent());
        responsePaginationDto.setTotalElements(resultPage.getTotalElements());
        responsePaginationDto.setSize(resultPage.getSize());
        responsePaginationDto.setTotalPages(resultPage.getTotalPages());
        return responsePaginationDto;
    }

    @Override
    public Iterable<Product> findAll() {
        return productRepository.findAll();
    }

    @Override
    public Product save(Product product) {
        return productRepository.save(product);
    }

    @Override
    public Optional<Product> findById(int id) {
        return productRepository.findById(id);
    }
}

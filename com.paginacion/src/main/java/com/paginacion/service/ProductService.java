package com.paginacion.service;

import com.paginacion.model.Product;
import com.paginacion.repository.IProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ProductService {
    @Autowired
    private IProductRepository iProductRepository;

    public Product saveProduct (Product product){
        if (product.getId() == null){
            return iProductRepository.save(product);
        }
        return null;
    }

    public Page<Product> getAllProduct (Integer page, Integer size, Boolean enablePagination){
        return iProductRepository.findAll(enablePagination ? PageRequest.of(page, size): Pageable.unpaged());
    }

    public Optional<Product> findById(Long id){
        return iProductRepository.findById(id);
    }

    public void deleteProduct(Long id){
        iProductRepository.deleteById(id);
    }

    public Product editProduct (Product product){
        if (product.getId() != null && iProductRepository.existsById(product.getId())){
            return iProductRepository.save(product);
        }
        return null;
    }

    public boolean existById(Long id) {
        return iProductRepository.existsById(id);
    }
}

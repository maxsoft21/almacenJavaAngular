package com.backend.almacen.controller;

import com.backend.almacen.dto.ResponsePaginationDto;
import com.backend.almacen.exception.ResourceNotFoundException;
import com.backend.almacen.model.Employee;
import com.backend.almacen.model.Product;
import com.backend.almacen.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/products")
    public ResponseEntity<Iterable<Product>> getProducts() {
        return ResponseEntity.ok(productService.findAll());
    }

    @GetMapping(value = "/products/p", params = {"page", "size"})
    public ResponseEntity<ResponsePaginationDto> findPaginated(@RequestParam(defaultValue = "0") int page,
                                                               @RequestParam(defaultValue = "10") int size) {
        return ResponseEntity.ok(productService.getProducts(page, size));
    }

    // create product rest api
    @PostMapping("/products")
    public ResponseEntity<Product> createProduct(@RequestBody Product product) {
        return ResponseEntity.status(HttpStatus.CREATED).body(
                productService.save(product));
    }

    @PutMapping("/products/{productId}")
    public ResponseEntity<Product> updateProduct(@PathVariable("productId") int productId, @RequestBody Product productUpdate) {
        Product product = productService.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("product not exist with id :" + productId));

        product.setDescription(productUpdate.getDescription());
        product.setDiscountedPrice(productUpdate.getDiscountedPrice());
        product.setOriginalPrice(productUpdate.getOriginalPrice());
        product.setStock(productUpdate.getStock());

        Product updatedProduct = productService.save(product);
        return ResponseEntity.status(HttpStatus.OK).body(updatedProduct);
    }
    @GetMapping("/products/{productId}")
    public ResponseEntity<Product> getProduct(@PathVariable("productId") int productId) {
        Product product = productService.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("product not exist with id :" + productId));
        return ResponseEntity.status(HttpStatus.OK).body(product);
    }

    @DeleteMapping("/products/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable int id){
        productService.delete(id);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}

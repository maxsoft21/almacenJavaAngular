package com.paginacion.controller;

import com.paginacion.model.Product;
import com.paginacion.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("product")
public class ProductController {
    @Autowired
    private ProductService productService;

    @PostMapping
    public ResponseEntity<Product> saveProduct(@Valid @RequestBody Product product) {
        return ResponseEntity.status(HttpStatus.CREATED).body(productService.saveProduct(product));
    }

    @GetMapping
    public ResponseEntity<Page<Product>> getAllStudent(
            @RequestParam(required = false,defaultValue = "0") Integer page,
            @RequestParam(required = false,defaultValue = "10") Integer size,
            @RequestParam(required = false,defaultValue = "false") Boolean enablePagination) {
        return ResponseEntity.ok(productService.getAllProduct(page, size, enablePagination));
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity deleteProduct(@PathVariable ("id") Long id){
        productService.deleteProduct(id);
        return ResponseEntity.ok(!productService.existById(id));
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Optional<Product>> findStudentById(@PathVariable ("id") Long id){
        return ResponseEntity.status(HttpStatus.OK).body(productService.findById(id));
    }

    @PutMapping
    public ResponseEntity<Product> editProduct (@Valid @RequestBody Product product){
        return ResponseEntity.status(HttpStatus.CREATED).body(productService.editProduct(product));
    }
    
}


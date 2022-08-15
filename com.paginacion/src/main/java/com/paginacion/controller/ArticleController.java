package com.paginacion.controller;

import com.paginacion.model.Article;
import com.paginacion.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("article")
public class ArticleController {
    @Autowired
    private ArticleService service;

    @PostMapping
    public ResponseEntity<Article> saveProduct(@Valid @RequestBody Article article) {
        return ResponseEntity.status(HttpStatus.CREATED).body(service.saveArticle(article));
    }

    @GetMapping
    public ResponseEntity<Page<Article>> getAllStudent(
            @RequestParam(required = false,defaultValue = "0") Integer page,
            @RequestParam(required = false,defaultValue = "10") Integer size,
            @RequestParam(required = false,defaultValue = "false") Boolean enablePagination) {
        return ResponseEntity.ok(service.getAllArticles(page, size, enablePagination));
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity deleteProduct(@PathVariable ("id") Long id){
        service.deleteArticle(id);
        return ResponseEntity.ok(!service.existById(id));
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Optional<Article>> findStudentById(@PathVariable ("id") Long id){
        return ResponseEntity.status(HttpStatus.OK).body(service.findById(id));
    }

    @PutMapping
    public ResponseEntity<Article> editProduct (@Valid @RequestBody Article article){
        return ResponseEntity.status(HttpStatus.CREATED).body(service.editArticle(article));
    }
    
}


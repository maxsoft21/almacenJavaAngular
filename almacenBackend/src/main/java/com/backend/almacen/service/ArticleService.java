package com.backend.almacen.service;

import com.backend.almacen.model.Article;
import com.backend.almacen.repository.IArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ArticleService {
    @Autowired
    private IArticleRepository iArticleRepository;

    public Article saveArticle (Article article) {
        if (article.getIdArticulo() == null){
            return iArticleRepository.save(article);
        }
        return null;
    }

    public Page<Article> getAllArticles (Integer page, Integer size, Boolean enablePagination){
        return iArticleRepository.findAll(enablePagination ? PageRequest.of(page, size): Pageable.unpaged());
    }

    public Optional<Article> findById(Long id){
        return iArticleRepository.findById(id);
    }

    public void deleteArticle(Long id){
        iArticleRepository.deleteById(id);
    }

    public Article editArticle (Article article){
        if (article.getIdArticulo() != null && iArticleRepository.existsById(article.getIdArticulo())){
            return iArticleRepository.save(article);
        }
        return null;
    }

    public boolean existById(Long id) {
        return iArticleRepository.existsById(id);
    }
}

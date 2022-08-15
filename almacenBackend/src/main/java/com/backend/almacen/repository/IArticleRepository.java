package com.backend.almacen.repository;

import com.backend.almacen.model.Article;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IArticleRepository extends JpaRepository<Article, Long> {

}

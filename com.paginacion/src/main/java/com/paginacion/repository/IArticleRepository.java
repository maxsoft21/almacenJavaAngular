package com.paginacion.repository;

import com.paginacion.model.Article;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IArticleRepository extends JpaRepository<Article, Long> {
}

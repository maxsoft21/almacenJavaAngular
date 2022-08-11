package com.backend.almacen.dto;

import lombok.Data;

import java.util.List;
@Data
public class ResponsePaginationDto<T>{
    private List<T> data;
    private long totalElements;
    private int totalPages;
    private int size;

}
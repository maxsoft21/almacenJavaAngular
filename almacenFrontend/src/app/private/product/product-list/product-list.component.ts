import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { ReponsePaginable } from '../../models/response-paginable.model';
import { Product } from '../../models/product.model';
import { ProductService } from '../../../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  listaProductos: Product[] = [];
  estado!: string;
  np: number = 0;
  rp: number = 5;
  tPages: number = 0;
  tElements: number = 0;

  pageSizeOptions: number[] = [5, 10, 25, 30];

  handlePages(e: PageEvent) {
    this.tElements = e.length;
    this.rp = e.pageSize;
    this.np = e.pageIndex;
    this.cargarProductos();
  }

  constructor(private service: ProductService,private router: Router ) { }

  ngOnInit(): void {
    this.cargarProductos();
  }
  cargarProductos() {
    this.service.getProducts<ReponsePaginable<Product>>(this.np, this.rp).subscribe(res => {
      this.listaProductos = res.content;
      this.tPages = res.totalPages;
      this.tElements = res.totalElements;
    })
  }

  cambiarPagina(varlor: number) {
    this.np += varlor;
    if (this.np < 0) this.np = 0;
    if (this.np >= this.tPages) this.np = this.tPages - 1;
    this.cargarProductos();
  } 
  
  cearPagina() {
    this.router.navigate(['/private/producto/crear']);
  }
}

import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { ArticuloService } from 'src/app/service/articulo.service';
import { Articulo } from '../../models/articulo.model';
import { ReponsePaginable } from '../../models/response-paginable.model';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  listaArticulos: Articulo[] = [];
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
    this.cargarArticulos();
  }

  constructor(private service: ArticuloService,private router: Router ) { }

  ngOnInit(): void {
    this.cargarArticulos();
  }
  cargarArticulos() {
    this.service.getArticulos<ReponsePaginable<Articulo>>(this.np, this.rp).subscribe(res => {
      this.listaArticulos = res.content;
      this.tPages = res.totalPages;
      this.tElements = res.totalElements;
    })
  }

  cambiarPagina(varlor: number) {
    this.np += varlor;
    if (this.np < 0) this.np = 0;
    if (this.np >= this.tPages) this.np = this.tPages - 1;
    this.cargarArticulos();
  } 
  
  cearPagina() {
    this.router.navigate(['/private/articulos/crear']);
  }
}

import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';
import { ReponsePaginable } from '../../models/response-paginable.model';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  listaUsuarios: Usuario[] = [];
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
    this.cargarUsuarios();
  }

  constructor(private service: UsuarioService,private router: Router ) { }

  ngOnInit(): void {
    this.cargarUsuarios();
  }
  cargarUsuarios() {
    this.service.getUsuarios<ReponsePaginable<Usuario>>(this.np, this.rp).subscribe(res => {
      this.listaUsuarios = res.content;
      this.tPages = res.totalPages;
      this.tElements = res.totalElements;
    })
  }

  cambiarPagina(varlor: number) {
    this.np += varlor;
    if (this.np < 0) this.np = 0;
    if (this.np >= this.tPages) this.np = this.tPages - 1;
    this.cargarUsuarios();
  } 
  
  cearPagina() {
    this.router.navigate(['/private/usuarios/crear']);
  }
}

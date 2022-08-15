import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticuloService } from 'src/app/service/articulo.service';
import { ArticuloRequest } from '../../models/articulo-request.model';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.css']
})
export class ArticleCreateComponent implements OnInit {

  crearArticulo: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private articloService: ArticuloService,
    private router: Router) {
    this.crearArticulo = formBuilder.group({
      nombre: ['', Validators.required],
      precio: ['', Validators.required],
      costo: ['', Validators.required],
      fecha: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  agregarArticulo() {
    console.log(this.crearArticulo.value);
    const ArticuloRequest: ArticuloRequest = {
      nombre: this.crearArticulo.value.nombre,
      precio: this.crearArticulo.value.precio,
      costo: this.crearArticulo.value.costo,
      fechaRegistro: this.crearArticulo.value.fecha
    };
    this.articloService
    .postArticulo(ArticuloRequest)
    .subscribe(p => this.router.navigate(['/private/articulos/listar']));
  }

}

import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticuloService } from 'src/app/service/articulo.service';
import { Articulo } from '../../models/articulo.model';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent implements OnInit {

  editarArticulo = new FormGroup({
    id: new FormControl(),
    nombre: new FormControl(),
    precio: new FormControl(),
    costo: new FormControl(),
    fecha: new FormControl(),
  });

  constructor(private formBuilder: FormBuilder,
    private articuloService: ArticuloService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.articuloService.getArticulo<Articulo>(id).subscribe(res => {
      console.log(res);
      let pipe = new DatePipe('en-US');
      this.editarArticulo = this.formBuilder.group({
        id: [res.idArticulo, Validators.required],
        nombre: [res.nombre, Validators.required],
        precio: [res.precio, Validators.required],
        costo: [res.costo, Validators.required],
        //fecha: [res.date, Validators.required],
        fecha: [pipe.transform(res.fechaRegistro, 'yyyy-MM-dd'), Validators.required]
      });
    })
  }

  actualizarArticulo() {
    const articulo: Articulo = {
      idArticulo: this.editarArticulo.value.id,
      nombre: this.editarArticulo.value.nombre,
      precio: this.editarArticulo.value.precio,
      costo: this.editarArticulo.value.costo,
      fechaRegistro: this.editarArticulo.value.fecha
    };
    this.articuloService
      .putArticulo(articulo)
      .subscribe(p => this.router.navigate(['/private/articulos/listar']));
  }

}

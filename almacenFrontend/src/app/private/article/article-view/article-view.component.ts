import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticuloService } from 'src/app/service/articulo.service';
import { Articulo } from '../../models/articulo.model';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css']
})
export class ArticleViewComponent implements OnInit {

  verArticulo = new FormGroup({
    id: new FormControl(),
    nombre: new FormControl(),
    precio: new FormControl(),
    costo: new FormControl(),
    fecha: new FormControl()
  });

  constructor(private formBuilder: FormBuilder,
    private ArticuloService: ArticuloService,
    private router: Router,
    private route: ActivatedRoute ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.ArticuloService.getArticulo<Articulo>(id).subscribe(res => {
      console.log(res);
      let pipe = new DatePipe('en-US');
      this.verArticulo = this.formBuilder.group({
        id: [res.idArticulo, Validators.required],
        nombre: [res.nombre, Validators.required],
        precio: [res.precio, Validators.required],
        costo: [res.costo, Validators.required],
        fecha: [pipe.transform(res.fechaRegistro, 'yyyy-MM-dd'), Validators.required]
      });
    });
  }
  listarArticulos(){
    this.router.navigate(['/private/articulos/listar']);
  }


}

import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product.model';
import { ProductService } from '../../../service/product.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  verProducto = new FormGroup({
    id: new FormControl(),
    nombre: new FormControl(),
    precio: new FormControl(),
    fecha: new FormControl(),
    direccion: new FormControl(),
    ubicacion: new FormControl()
  });

  constructor(private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.productService.getProduct<Product>(id).subscribe(res => {
      console.log(res);
      let pipe = new DatePipe('en-US');
      this.verProducto = this.formBuilder.group({
        id: [res.id, Validators.required],
        nombre: [res.name, Validators.required],
        precio: [res.price, Validators.required],
        ubicacion: [res.location, Validators.required],
        direccion: [res.address, Validators.required],
        fecha: [pipe.transform(res.date, 'yyyy-MM-dd'), Validators.required]
      });
    });
  }
  listarProductos(){
    this.router.navigate(['/private/producto/listar']);
  }

}

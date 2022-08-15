import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product.model';
import { ProductService } from '../../../service/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  editarProducto = new FormGroup({
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
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.productService.getProduct<Product>(id).subscribe(res => {
      console.log(res);
      let pipe = new DatePipe('en-US');
      this.editarProducto = this.formBuilder.group({
        id: [res.id, Validators.required],
        nombre: [res.name, Validators.required],
        precio: [res.price, Validators.required],
        ubicacion: [res.location, Validators.required],
        direccion: [res.address, Validators.required],
        //fecha: [res.date, Validators.required],
        fecha: [pipe.transform(res.date, 'yyyy-MM-dd'), Validators.required]
      });
    })
  }

  actualizarProducto() {
    const producto: Product = {
      id: this.editarProducto.value.id,
      name: this.editarProducto.value.nombre,
      price: this.editarProducto.value.precio,
      date: this.editarProducto.value.fecha,
      address: this.editarProducto.value.direccion,
      location: this.editarProducto.value.ubicacion
    };
    this.productService
      .putProduct(producto)
      .subscribe(p => this.router.navigate(['/private/producto/listar']));
  }

}

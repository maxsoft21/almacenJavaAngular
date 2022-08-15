import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductRequest } from '../../models/product-request.model';
import { Product } from '../../models/product.model';
import { ProductService } from '../../../service/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  crearProducto: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router) {
    this.crearProducto = formBuilder.group({
      nombre: ['', Validators.required],
      precio: ['', Validators.required],
      fecha: ['', Validators.required],
      direccion: ['', Validators.required],
      ubicacion: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  agregarProducto() {
    console.log(this.crearProducto.value);
    const productoRequest: ProductRequest = {
      name: this.crearProducto.value.nombre,
      price: this.crearProducto.value.precio,
      date: this.crearProducto.value.fecha,
      address: this.crearProducto.value.direccion,
      location: this.crearProducto.value.ubicacion
    };
    this.productService
    .postProduct(productoRequest)
    .subscribe(p => this.router.navigate(['/private/producto/listar']));
  }

}

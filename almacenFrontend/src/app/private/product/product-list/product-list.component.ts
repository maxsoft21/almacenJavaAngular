import { Component, OnInit } from '@angular/core';
import { ProductList } from '../../models/product-list.model';
import { Product } from '../../models/product.model';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  listaProductos: Product[]=[];
  estado!:string;
  np:number =1;
  rp:number = 5;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.cargaProductos();
  }

  cargaProductos(): void {
    this.productService.getProducts<ProductList>(this.np,this.rp).subscribe(
      (response)=>{
        this.listaProductos = response.data;
        //this.estado = response.status;
      }
    );
   }

}

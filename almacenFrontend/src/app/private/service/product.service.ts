import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProductList } from "../models/product-list.model";
import { Product } from "../models/product.model";

@Injectable({
    providedIn: 'root'
})
export class ProductService{
    URL:string = 'http://localhost:8080/api/v1/products/p';
    product!:Product;
    constructor(private httpClient: HttpClient){
        console.log("ProductService");
    }
    getProducts<ProductList>(npag:number, rxpag:number):Observable<ProductList>{
       const httpParams = new HttpParams({
            fromObject:{
            page:npag,
            size:rxpag
        }
        });
        return this.httpClient.get<ProductList>(this.URL,{params:httpParams}); 
        //return this.httpClient.get<ProductList>(this.URL);
    }
}
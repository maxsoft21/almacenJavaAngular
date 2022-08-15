import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http'
import { Product } from "../private/models/product.model";
import { Observable } from "rxjs";
import { ProductRequest } from "../private/models/product-request.model";
import { ReponsePaginable } from "../private/models/response-paginable.model";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    URL: string = 'http://localhost:9090/product/';
    product!: Product;

    constructor(private httpClient: HttpClient) { }

    getProducts<ReponsePaginable>(npag: number, rxpag: number): Observable<ReponsePaginable> {
        //return this.httpClient.get<ProductList>(this.URL);
        const httpParams = new HttpParams(
            {
                fromObject: {
                    page: npag,
                    size: rxpag,
                    enablePagination: true
                }
            }
        );
        return this.httpClient.get<ReponsePaginable>(this.URL, { params: httpParams });
    }
    getProduct<Product>(idProducto: number): Observable<Product> {
        return this.httpClient.get<Product>(this.URL+`${idProducto}`);
    }

    postProduct(productoRequest: ProductRequest):Observable<Product>{
        return this.httpClient.post<Product>(this.URL,productoRequest);
    }

    putProduct(producto: Product):Observable<Product>{
        return this.httpClient.put<Product>(this.URL,producto);
    }
}
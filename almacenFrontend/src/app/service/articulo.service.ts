import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from "rxjs";
import { Articulo } from "../private/models/articulo.model";
import { ArticuloRequest } from "../private/models/articulo-request.model";

@Injectable({
    providedIn: 'root'
})
export class ArticuloService {
    URL: string = 'http://localhost:9090/article/';
    articulo!: Articulo;

    constructor(private httpClient: HttpClient) { }

    getArticulos<ReponsePaginable>(npag: number, rxpag: number): Observable<ReponsePaginable> {
        const httpParams = new HttpParams(
            {
                fromObject: {
                    nropag: npag,
                    regxpag: rxpag,
                    filtro: ''
                }
            }
        );
        return this.httpClient.get<ReponsePaginable>(this.URL, { params: httpParams });
    }
    getArticulo<Articulo>(idArticulo: number): Observable<Articulo> {
        return this.httpClient.get<Articulo>(this.URL+`${idArticulo}`);
    }

    postArticulo(articuloRequest: ArticuloRequest):Observable<Articulo>{
        return this.httpClient.post<Articulo>(this.URL,articuloRequest);
    }

    putArticulo(articulo: Articulo):Observable<Articulo>{
        return this.httpClient.put<Articulo>(this.URL,articulo);
    }
}
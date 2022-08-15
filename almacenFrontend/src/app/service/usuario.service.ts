import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from "rxjs";
import { UsuarioRequest } from "../private/models/usuario-request.model";
import { Usuario } from "../private/models/usuario.model";

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {
    URL: string = 'http://localhost:9091/usuarios';

    constructor(private httpClient: HttpClient) { }

    postUsuario(usuario: UsuarioRequest):Observable<Usuario>{
        return this.httpClient.post<Usuario>(this.URL,usuario);
    }
    getUsuarios<ReponsePaginable>(npag: number, rxpag: number): Observable<ReponsePaginable> {
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
    getUsuario<Usuario>(username: string): Observable<Usuario> {
        return this.httpClient.get<Usuario>(this.URL+"/"+`${username}`);
    }
}
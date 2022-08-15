import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from "rxjs";
import { Login } from "../private/models/login.model";
import { CookieResult } from "../private/models/cookie-result";

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    URL: string = 'http://localhost:9091/generate-token';
    constructor(private httpClient: HttpClient) { }

    postAuthenticate(login: Login):Observable<CookieResult>{
        return this.httpClient.post<CookieResult>(this.URL,login);
    }
}
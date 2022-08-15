import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { CookieService } from 'ngx-cookie-service'
import { CookieResult } from 'src/app/private/models/cookie-result';
import { Login } from 'src/app/private/models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginAuthentication: FormGroup = new FormGroup({
    usuario: new FormControl(),
    clave: new FormControl()
  });

  constructor(
    private fromBuilder: FormBuilder,
    private loginService: LoginService,
    private rotuer: Router,
    private cookieService: CookieService
  ) { 
    this.loginAuthentication = this.fromBuilder.group({
      usuario:['', Validators.required],
      clave:['',Validators.required]
    })

  }

  ngOnInit(): void {
  }
  autenticarLogin(){

    if(this.loginAuthentication.invalid)
      return;

    const login: Login = {
      username: this.loginAuthentication.value.usuario,
      password: this.loginAuthentication.value.clave
    };
    this.loginService.postAuthenticate(login).subscribe((e:CookieResult)=>{
      this.cookieService.set('token_access',e.token,1);
      this.rotuer.navigate(['/private/']);
    });
  }
}

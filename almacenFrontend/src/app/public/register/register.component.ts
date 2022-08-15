import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioRequest } from 'src/app/private/models/usuario-request.model';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  crearUsuario: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router) {
    this.crearUsuario = formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', Validators.required],
      telefono: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  formSubmit(){

    console.log(this.crearUsuario.value);
    const usuarioRequest: UsuarioRequest = {
      username: this.crearUsuario.value.username,
      password: this.crearUsuario.value.password,
      nombre: this.crearUsuario.value.nombre,
      apellido: this.crearUsuario.value.apellido,
      email: this.crearUsuario.value.email,
      telefono: this.crearUsuario.value.telefono,
    };
    this.usuarioService
    .postUsuario(usuarioRequest)
    .subscribe(p => this.router.navigate(['/']));
  }
}

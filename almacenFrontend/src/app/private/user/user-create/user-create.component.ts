import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';
import { UsuarioRequest } from '../../models/usuario-request.model';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

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
    .subscribe(p => this.router.navigate(['/private/usuarios/listar']));
  }
}

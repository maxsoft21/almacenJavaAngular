import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';
import { UsuarioRequest } from '../../models/usuario-request.model';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  editarUsuario: FormGroup= new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    nombre: new FormControl(),
    apellido: new FormControl(),
    email: new FormControl(),
    telefono: new FormControl(),
  });

  constructor(private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const username = String(this.route.snapshot.paramMap.get('id'));
    this.usuarioService.getUsuario<Usuario>(username).subscribe(res => {
      console.log(res);
      this.editarUsuario = this.formBuilder.group({
        username: [res.username, Validators.required],
        password: [res.password, Validators.required],
        nombre: [res.nombre, Validators.required],
        apellido: [res.apellido, Validators.required],
        email: [res.email, Validators.required],
        telefono: [res.telefono, Validators.required],
      });
    })
  }

  formSubmit(){

    console.log(this.editarUsuario.value);
    const usuarioRequest: UsuarioRequest = {
      username: this.editarUsuario.value.username,
      password: this.editarUsuario.value.password,
      nombre: this.editarUsuario.value.nombre,
      apellido: this.editarUsuario.value.apellido,
      email: this.editarUsuario.value.email,
      telefono: this.editarUsuario.value.telefono,
    };
    this.usuarioService
    .postUsuario(usuarioRequest)
    .subscribe(p => this.router.navigate(['/private/usuarios/listar']));
  }

}

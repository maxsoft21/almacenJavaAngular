import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  verUsuario: FormGroup= new FormGroup({
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
      this.verUsuario = this.formBuilder.group({
        username: [res.username, Validators.required],
        password: [res.password, Validators.required],
        nombre: [res.nombre, Validators.required],
        apellido: [res.apellido, Validators.required],
        email: [res.email, Validators.required],
        telefono: [res.telefono, Validators.required],
      });
    })
  }


  listarUsuarios(){
    this.router.navigate(['/private/usuarios/listar']);
  }


}

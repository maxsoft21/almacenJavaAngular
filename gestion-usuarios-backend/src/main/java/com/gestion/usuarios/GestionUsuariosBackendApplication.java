package com.gestion.usuarios;

import com.gestion.usuarios.modelo.Rol;
import com.gestion.usuarios.modelo.Usuario;
import com.gestion.usuarios.modelo.UsuarioRol;
import com.gestion.usuarios.servicios.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class GestionUsuariosBackendApplication implements CommandLineRunner {

	@Autowired
	private UsuarioService usuarioService;

	public static void main(String[] args) {
		SpringApplication.run(GestionUsuariosBackendApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		try{
		Usuario usuario = new Usuario();

		usuario.setNombre("Max");
		usuario.setApellido("Leon");
		usuario.setUsername("max");
		usuario.setPassword("123456");
		usuario.setEmail("max@correo.com");
		usuario.setTelefono("123456789");
		usuario.setPerfil("foto.png");

		Rol rol = new Rol();
		rol.setRolId(2L);
		rol.setRolNombre("NORMAL");

		Set<UsuarioRol> usuariosRoles = new HashSet<>();
		UsuarioRol usuarioRol = new UsuarioRol();
		usuarioRol.setRol(rol);
		usuarioRol.setUsuario(usuario);
		usuariosRoles.add(usuarioRol);

			Usuario usuarioGuardado = usuarioService.guardarUsuario(usuario,usuariosRoles);
			System.out.println(usuarioGuardado.getUsername());
		}catch (Exception exception){
			exception.printStackTrace();
		}
	}
}

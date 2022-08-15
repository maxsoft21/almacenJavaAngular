package com.sistema.gestion.usuarios.repositorios;

import com.sistema.gestion.usuarios.modelo.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario,Long> {

    public Usuario findByUsername(String username);

}

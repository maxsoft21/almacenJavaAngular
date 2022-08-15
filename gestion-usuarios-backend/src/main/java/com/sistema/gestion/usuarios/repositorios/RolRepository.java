package com.sistema.gestion.usuarios.repositorios;

import com.sistema.gestion.usuarios.modelo.Rol;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RolRepository extends JpaRepository<Rol,Long> {
}

package com.gestion.usuarios.repositorios;

import com.gestion.usuarios.modelo.Rol;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RolRepository extends JpaRepository<Rol,Long> {
}

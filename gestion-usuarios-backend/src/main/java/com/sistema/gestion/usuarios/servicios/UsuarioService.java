package com.sistema.gestion.usuarios.servicios;

import com.sistema.gestion.usuarios.modelo.Usuario;
import com.sistema.gestion.usuarios.modelo.UsuarioRol;
import org.springframework.data.domain.Page;

import java.util.Set;

public interface UsuarioService {

    public Usuario guardarUsuario(Usuario usuario, Set<UsuarioRol> usuarioRoles) throws Exception;

    public Usuario obtenerUsuario(String username);

    public void eliminarUsuario(Long usuarioId);

    public Page<Usuario> getUsuarios(Integer page, Integer size, Boolean enablePagination);
}

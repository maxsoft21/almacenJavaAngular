import { Authorities } from "./authorities.model";

export class Usuario {
    constructor(
        public username : string,
        public password : string,
        public nombre: string,
        public apellido: string,
        public email: string,
        public telefono: string,
        public perfil: string,
        public authorities:Authorities
        ) { }
}
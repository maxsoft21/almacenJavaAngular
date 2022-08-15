export class UsuarioRequest {
    constructor(
        public username : string,
        public password : string,
        public nombre: string,
        public apellido: string,
        public email: string,
        public telefono: string,
        ) { }
}
export class Empleado {

    nombre: string;
    apellidos: string;
    email: string;
    departamento: string;
    imagen: string;


    constructor(pNombre = '', pApellidos = '', pEmail = '', pDepartamento = '', pImagen = '') {
        this.nombre = pNombre;
        this.apellidos = pApellidos;
        this.email = pEmail;
        this.departamento = pDepartamento
        this.imagen = pImagen;
    }
}
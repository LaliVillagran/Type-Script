
interface utlAlumno{
    nombre:string;
    edad:number;

}
const pruebaAlumno:utlAlumno={
    nombre:'mario',
    edad:23,
    direccion:{
        calle:'Bambu',
        pais:'Mexico',
        estado:'Gto',
        numero:477254423,
    },
    mostrarDireccion(){
        return +this.nombre+ ', ' +this.direccion.estado+ ', ' +this.direccion.pais;
    }

}
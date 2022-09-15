
interface utlAlumno{
    nombre:string;
    edad:number;
    direccion:{
    calle:string;
    pais:string;
    estado:string;
    numero:string|number;
    }
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
    

}

function mostrarDireccion(){
        return pruebaAlumno.nombre+ ', ' +pruebaAlumno.direccion.estado+ ', ' +pruebaAlumno.direccion.pais;
    }
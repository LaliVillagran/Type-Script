interface Direccion{
    calle:string;
    pais:string;
    estado:string;

}

interface DatosAlumno{
    nombre:string;
    edad:number;
    direccionn:Direccion;

    mostrarDireccion:()=>string;
}

const utlalumno:DatosAlumno={
    nombre:'mario',
    edad:23,
    direccionn:{
        calle:'Bambu',
        pais:'Mexico',
        estado:'Gto',
    },
    
         mostrarDireccion(){
        return this.nombre+ ', ' +this.direccionn.estado+ ', ' 
        +this.direccionn.pais;
        console.log(this.direccionn);
    }
}


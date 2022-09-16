//Class

class Persona{ //private, protected, public
    nombre:string;
    edad:number;

    contructor(a:string,b:number){

        this.nombre=a;
        this.edad=b;
    }
    setNombre(a:string){
        this.nombre=a;
    }

    getNombre():string{
        return this.nombre;
    }

    imprimir(){ 
    console.log(`Nombre: ${this.nombre} y Edad: ${this.edad}`)
    }
}

let persona1:Persona;
persona1=new Persona(/*'Dario',22*/);

let persona2:Persona;
persona2=new Persona(/*'Laura',20*/);

persona1.nombre='Mario';
persona1.edad=23;

// obtenido desde getnombre
console.log(persona1.getNombre())

persona1.imprimir();
persona2.imprimir();

///////////////////////////////////////////////////////////////////////////////

class Dado{
    private valor:number;
    public tirar(){
        this.generar();
    }

    private generar(){
        this.valor=Math.floor(Math.random()*6)+1;
    }

    public imprimir(){
        console.log(`Salio el valor ${this.valor}`);
    }
}

let dado1=new Dado();
dado1.tirar();
dado1.imprimir();
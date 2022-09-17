//Class

class tabla{ //private, protected, public
    private numero:number;
    public num:number;

    contructor(a:number){

        this.numero=a;
    }
    setNumero(a:number){
        this.numero=a;
    }

    getNumero():number{
        return this.numero;
    }

    calcular():void{
        for(let i=1; i<11; ++i){
            console.log(`${this.numero} x ${i}= ${i*this.numero}`)
        }

        let s:number=1;
        while(s<11){
            console.log(`${this.numero} x ${s} = ${s*this.numero}`);
            ++s;
        }
    }
}

let tabla1=new tabla();
tabla1.setNumero(7);
console.log('variable privada '+tabla1.getNumero());

tabla1.num=6;
console.log('variable publica '+tabla1.num);

console.log('otros '+tabla1.calcular());
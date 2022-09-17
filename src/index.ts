//Operaciones de mulplicar a x b
//usuando sumas
//a = 3 b = 5
//res: 3 + 3 + 3 + 3 + 3 =15

class multi{
    public nom:number;
    public a1:number;
    public b1:number;

    contructor(a:number,a2:number,b2:number){

        this.nom=a;
        this.a1=a2;
        this.b1=b2;
    }
    setNumer(a:number,a2:number,b2:number){
        this.nom=a;
        this.a1=a2;
        this.b1=b2;
    }

    getNumer():number{
        return this.nom;
        return this.a1;
        return this.b1;
    }

    calcular():void{
        for(let i=1; i<6; ++i){
            
            console.log(`${this.a1} x ${i}= ${i*this.a1}`)
        }

        // let s:number=1;
        // while(s<11){
        //     console.log(`${this.nom} x ${s} = ${s*this.nom}`);
        //     ++s;
        // }
    }
}

let multipli=new multi();
multipli.a1=3;
multipli.b1=5;
console.log(multipli.calcular());
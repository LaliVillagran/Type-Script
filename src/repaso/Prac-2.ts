export class formulaGeneral{
    valora:number;
    valorb:number;
    valorc:number;

    result:number;
    result2:number;
    result3:number;
    result4:number;


    contructor(numero1:number,numero2:number){

        this.valora=numero1;
        this.valorb=numero2;
    }

    // setNumero1(a:number){
    //     this.numero1=a;
    // }

    // getNumero1():number{
    //     return this.numero1
    // }

    // setNumero2(b:number){
    //     this.numero2=b;
    // }

    // getNumero2():number{
    //     return this.numero2
    // }

    suma(){
        this.result = this.valora + this.valorb;

        console.log("Formula suma")
        console.log(`valor "a": ${this.valora}`)
        console.log(`valor "b": ${this.valorb}`)
        console.log(`resultado ${this.result}`)
        return this.result;
    }

    resta(){
        this.result2 = this.valora - this.valorb;

        console.log("Formula resta")
        this.result = this.valora + this.valorb;
        console.log(`valor "a": ${this.valora}`)
        console.log(`valor "b": ${this.valorb}`)
        console.log(`resultado ${this.result2}`)
        return this.result2;
    }

    FormGenx1(){
        this.result3 = - this.valora - Math.sqrt(this.valorb^2 - 4 * this.valora * this.valorc) / 2*this.valora;

        console.log("Formula General x1")
        console.log(`valor "a": ${this.valora}`)
        console.log(`valor "b": ${this.valorb}`)
        console.log(`valor "c": ${this.valorc}`)
        console.log(`resultado ${this.result3}`)
        return this.result3;
    }

    FormGenx2(){
        this.result4 = - this.valora + Math.sqrt(this.valorb^2 - 4 * this.valora * this.valorc) / 2*this.valora;

        console.log("Formula General x2")
        console.log(`valor "a": ${this.valora}`)
        console.log(`valor "b": ${this.valorb}`)
        console.log(`valor "c": ${this.valorc}`)
        console.log(`resultado ${this.result4}`)
        return this.result4;
    }

}
let f1:formulaGeneral;
f1=new formulaGeneral();

let f2:formulaGeneral;
f2=new formulaGeneral();

let f3:formulaGeneral;
f3=new formulaGeneral();

let f4:formulaGeneral;
f4=new formulaGeneral();



f1.valora=5.7;
f1.valorb=2;

f2.valora=10;
f2.valorb=5;

f3.valora=20;
f3.valorb=15;
f3.valorc=5;

f4.valora=4;
f4.valorb=3;
f4.valorc=5;


f1.suma();
f2.resta();
f3.FormGenx1();
f4.FormGenx2();
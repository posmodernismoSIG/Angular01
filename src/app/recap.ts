/*construccion de una variable tipada*/ 
const username:string | number = 'sebas';
// construccion de una aroba function tipada

const sum = (a: number, b: number) =>{
    return a+b;
}
//objeto 
class person {
    age:number;
    lastName:string;
    private cc :number;    //atributo privado que no se puede llamar
    constructor(age: number, lastName : string, cc : number){
        this.age = age;
        this.lastName = lastName;
        this.cc = cc;
    }   
}
class rectangulo {
    constructor(ancho: number, alto: number, nombre: string) {}
}
//objeto abreviado 
class personAbreviado {
    constructor(public age:number, public lastName:string, private cc:number) {}
}
const juan = new person(10, 'Ramirez', 10239566);
const sebastian = new personAbreviado(24, 'Diaz', 1023956614)
const r01 = new rectangulo(10, 15, 'rc01')



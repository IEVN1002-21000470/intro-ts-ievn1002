function sumar(a:number, b:number):number
{
    return a + b
}

const resultado = sumar(4,3);
console.log(resultado);

function multiplicar(n1:number, otronumero?:number, base:number=6):number
{
    return n1 * base;
}
console.log(multiplicar(3));
console.log(multiplicar(3,5));
console.log(multiplicar(3,3,4));

//funciones tipo flecha
const addNumberArrow=(a:number, b:number):string =>{return `${a+b}`}

interface Mascotas{
    nombre:string,
    edad:number,
    raza:string,
    sexo?:string,
    vacunado:boolean
    mostrarMascota:()=>void
}

function mostrarMascota(mascota:Mascotas, x:number):void{
    mascota.edad+=x;
    console.log(mascota);
    console.log(mascota.mostrarEdad());
}

const nuevaMascota:Mascotas={
    nombre: "firulais",
    edad: 5,
    raza: "pastor aleman",
    vacunado: true,
    mostrarEdad(){
        console.log(`la edad de ${this.nombre} as $ {this.edad}`);
    }
}
mostrarMascota(nuevaMascota,2);
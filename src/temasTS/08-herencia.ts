
class Persona3{
    protected nombre:string;
    protected edad:number;
    protected direccion:string;
    constructor(nombre:string, edad:number, direccion:string){
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
    }
    mostrarPersona(){
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Edad: ${this.edad}`);
    console.log(`Direccion: ${this.direccion}`);
    }
}

class Empleado extends Persona3{
    private salario:number;
    constructor(nombre:string, edad:number, direccion:string, salario:number){
        super(nombre, edad, direccion); //EL super se utiliza para realizar un envio de propiedades al obj padre
        this.salario = salario;
    }

    imprimir(){
        if(this.salario > 5000)
            console.log(`${this.nombre} debe de pagar impuestos`)
        else
            console.log(`${this.nombre} no debe de pagar impuesto`)
    }
}

const persona3 = new Persona3('Juan',44,'Veracruz 324');
persona3.mostrarPersona();

const persona1 = new Empleado('Juan', 44, 'Veracruz 324', 7000)
persona1.imprimir();
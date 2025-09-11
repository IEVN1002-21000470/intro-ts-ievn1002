
interface Reproductor{
    volumen: number,
    segundo: number,
    cancion: string,
    detalles: Detalles
}

interface Detalles{
    autor: string,
    anio: number,
}

const reproductor: Reproductor={
    volumen: 90,
    segundo: 35,
    cancion: "Mess",
    detalles:{
        autor: "Ed Sheeran",
        anio: 2015
    }
}

console.log("el volumen actual es: ", reproductor.volumen);
console.log("el volumen actual es: ", reproductor.segundo);
console.log("el volumen actual es: ", reproductor.cancion);
console.log("el volumen actual es: ", reproductor.detalles.autor);
console.log("el volumen actual es: ", reproductor.detalles.anio);

//desestructuracion de objetos

const {volumen, segundo, cancion, detalles}=reproductor;
const {autor,anio}=detalles;
console.log("el volumen actual es: ", volumen);
console.log("el segundo actual es: ", segundo);
console.log("la cancion actual es: ", cancion);
console.log("el autor actual es: ", autor);
console.log("el año actual es: ", anio);

//desestructuracion de arreglos
const dbz:string[]=["Goku","Vegeta","Trunks"];
const [p1,p2,p3]=dbz;

console.log("Personaje 1: ", p1);
console.log("Personaje 2: ", p2);
console.log("Personaje 3: ", p3);
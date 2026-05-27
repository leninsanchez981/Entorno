class Persona {
    nombre: string;
    edad: number;
    peso: number;
    altura: number;

    constructor(nombre: string, edad: number, peso: number, altura: number) {
        this.nombre = nombre;
        this.edad = edad;
        this.peso = peso;
        this.altura = altura;
    }

    saltar() {
        console.log("Estoy saltando");
    }

    saludar() {
        console.log("Hola, mi nombre es " + this.nombre);
    }
}

const persona1 = new Persona("Juan", 30, 80, 1.75);

persona1.saltar();
persona1.saludar();

console.log(persona1);
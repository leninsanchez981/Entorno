interface IAnimal {
    comer(): void;
    hacerSonido(): void;
}

abstract class Animal implements IAnimal {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    comer(): void {
        console.log(this.nombre + " está comiendo");
    }

    abstract hacerSonido(): void;
}

class Perro extends Animal {
    hacerSonido(): void {
        console.log("Guau guau");
    }
}

class Gato extends Animal {
    hacerSonido(): void {
        console.log("Miau");
    }
}

const perro = new Perro("Max", 3);

perro.comer();
perro.hacerSonido();
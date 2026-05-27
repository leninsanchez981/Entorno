interface ICurso {
    mostrarCurso(): void;
}

class Curso implements ICurso {
    titulo: string;
    instructor: string;
    duracion: number;

    constructor(titulo: string, instructor: string, duracion: number) {
        this.titulo = titulo;
        this.instructor = instructor;
        this.duracion = duracion;
    }

    mostrarCurso(): void {
        console.log("Curso: " + this.titulo);
    }
}

class CursoPremium extends Curso {
    precio: number;

    constructor(
        titulo: string,
        instructor: string,
        duracion: number,
        precio: number
    ) {
        super(titulo, instructor, duracion);
        this.precio = precio;
    }

    obtenerAcceso(): void {
        console.log("Acceso premium");
    }
}

const curso = new CursoPremium("TypeScript", "Pedro", 10, 100);

curso.mostrarCurso();
curso.obtenerAcceso();
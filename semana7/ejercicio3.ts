class Curso {
    titulo: string;
    instructor: string;
    duracion: number;

    constructor(titulo: string, instructor: string, duracion: number) {
        this.titulo = titulo;
        this.instructor = instructor;
        this.duracion = duracion;
    }

    mostrarCurso() {
        console.log("Curso: " + this.titulo);
    }
}

class CursoGratis extends Curso {
    obtenerAcceso() {
        console.log("Acceso gratuito");
    }
}

class CursoPago extends Curso {
    precio: number;

    constructor(titulo: string, instructor: string, duracion: number, precio: number) {
        super(titulo, instructor, duracion);
        this.precio = precio;
    }

    obtenerAcceso() {
        console.log("Acceso con pago de $" + this.precio);
    }
}

class CursoPremium extends Curso {
    precio: number;

    constructor(titulo: string, instructor: string, duracion: number, precio: number) {
        super(titulo, instructor, duracion);
        this.precio = precio;
    }

    obtenerAcceso() {
        console.log("Acceso premium exclusivo");
    }
}

const curso1 = new CursoGratis("HTML Básico", "Pedro", 5);
curso1.mostrarCurso();
curso1.obtenerAcceso();

const curso2 = new CursoPago("TypeScript", "Laura", 10, 50);
curso2.obtenerAcceso();

const curso3 = new CursoPremium("POO Avanzada", "Mario", 20, 100);
curso3.obtenerAcceso();
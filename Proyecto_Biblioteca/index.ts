interface ILibro {
    id: number;
    titulo: string;
    autor: string;
    categoria: string;
    disponible: boolean;
}

interface IUsuario {
    id: number;
    nombre: string;
    correo: string;
    telefono: string;
}

interface IPrestamo {
    id: number;
    libroId: number;
    usuarioId: number;
    fechaPrestamo: Date;
    fechaDevolucion: Date;
}

class Libro implements ILibro {
    constructor(
        public id: number,
        public titulo: string,
        public autor: string,
        public categoria: string,
        public disponible: boolean = true
    ) {}
}

class Usuario implements IUsuario {
    constructor(
        public id: number,
        public nombre: string,
        public correo: string,
        public telefono: string
    ) {}
}

class Prestamo implements IPrestamo {
    constructor(
        public id: number,
        public libroId: number,
        public usuarioId: number,
        public fechaPrestamo: Date,
        public fechaDevolucion: Date
    ) {}
}

class Biblioteca {
    libros: Libro[] = [];
    usuarios: Usuario[] = [];
    prestamos: Prestamo[] = [];

    agregarLibro(libro: Libro): void {
        this.libros.push(libro);
    }

    eliminarLibro(id: number): void {
        this.libros = this.libros.filter(
            libro => libro.id !== id
        );
    }

    buscarLibro(id: number): Libro | undefined {
        return this.libros.find(
            libro => libro.id === id
        );
    }

    buscarLibroPorTitulo(titulo: string): void {
        const resultado = this.libros.filter(
            libro =>
                libro.titulo
                    .toLowerCase()
                    .includes(titulo.toLowerCase())
        );

        console.log(resultado);
    }

    buscarLibroPorAutor(autor: string): void {
        const resultado = this.libros.filter(
            libro =>
                libro.autor
                    .toLowerCase()
                    .includes(autor.toLowerCase())
        );

        console.log(resultado);
    }

    listarLibros(): void {
        console.log(this.libros);
    }

    registrarUsuario(usuario: Usuario): void {
        this.usuarios.push(usuario);
    }

    buscarUsuario(id: number): Usuario | undefined {
        return this.usuarios.find(
            usuario => usuario.id === id
        );
    }

    buscarUsuarioPorNombre(nombre: string): void {
        const resultado = this.usuarios.filter(
            usuario =>
                usuario.nombre
                    .toLowerCase()
                    .includes(nombre.toLowerCase())
        );

        console.log(resultado);
    }

    listarUsuarios(): void {
        console.log(this.usuarios);
    }

    prestarLibro(prestamo: Prestamo): void {

        const libro = this.buscarLibro(prestamo.libroId);
        const usuario = this.buscarUsuario(prestamo.usuarioId);

        if (!libro) {
            console.log("Error: El libro no existe.");
            return;
        }

        if (!usuario) {
            console.log("Error: El usuario no existe.");
            return;
        }

        if (!libro.disponible) {
            console.log("Error: El libro ya está prestado.");
            return;
        }

        libro.disponible = false;

        this.prestamos.push(prestamo);
    }

    devolverLibro(idPrestamo: number): void {

        const prestamo = this.prestamos.find(
            prestamo => prestamo.id === idPrestamo
        );

        if (!prestamo) {
            console.log("Error: Préstamo no encontrado.");
            return;
        }

        const libro = this.buscarLibro(
            prestamo.libroId
        );

        if (libro) {
            libro.disponible = true;
        }

        prestamo.fechaDevolucion = new Date();
    }

    listarPrestamos(): void {
        console.log(this.prestamos);
    }
}

const biblioteca = new Biblioteca();

const libro1 = new Libro(
    1,
    "Clean Code",
    "Robert C. Martin",
    "Programación"
);

const libro2 = new Libro(
    2,
    "El Principito",
    "Antoine de Saint-Exupéry",
    "Novela"
);

const libro3 = new Libro(
    3,
    "Don Quijote",
    "Miguel de Cervantes",
    "Literatura"
);

const libro4 = new Libro(
    4,
    "Hábitos Atómicos",
    "James Clear",
    "Desarrollo Personal"
);

const libro5 = new Libro(
    5,
    "1984",
    "George Orwell",
    "Ciencia Ficción"
);

biblioteca.agregarLibro(libro1);
biblioteca.agregarLibro(libro2);
biblioteca.agregarLibro(libro3);
biblioteca.agregarLibro(libro4);
biblioteca.agregarLibro(libro5);

const usuario1 = new Usuario(
    1,
    "María López",
    "maria@gmail.com",
    "0990929279"
);

const usuario2 = new Usuario(
    2,
    "Juan Pérez",
    "juan@gmail.com",
    "0992894532"
);

const usuario3 = new Usuario(
    3,
    "Mateo",
    "mateo@gmail.com",
    "0992466782"
);

biblioteca.registrarUsuario(usuario1);
biblioteca.registrarUsuario(usuario2);
biblioteca.registrarUsuario(usuario3);

biblioteca.listarLibros();
biblioteca.listarUsuarios();

const prestamo1 = new Prestamo(
    1,
    1,
    1,
    new Date(),
    new Date()
);

biblioteca.prestarLibro(prestamo1);

biblioteca.listarLibros();

const prestamo2 = new Prestamo(
    2,
    1,
    2,
    new Date(),
    new Date()
);

biblioteca.prestarLibro(prestamo2);

biblioteca.devolverLibro(1);

biblioteca.listarLibros();

biblioteca.listarPrestamos();

biblioteca.buscarLibroPorTitulo("Clean");
biblioteca.buscarLibroPorAutor("Martin");
biblioteca.buscarUsuarioPorNombre("María");
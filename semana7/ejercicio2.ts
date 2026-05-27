interface IEmpleado {
    mostrarInformacion(): void;
    calcularSalario(): number;
}

abstract class Empleado implements IEmpleado {
    nombre: string;
    salarioBase: number;

    constructor(nombre: string, salarioBase: number) {
        this.nombre = nombre;
        this.salarioBase = salarioBase;
    }

    mostrarInformacion(): void {
        console.log("Empleado: " + this.nombre);
    }

    abstract calcularSalario(): number;
}

class Desarrollador extends Empleado {
    calcularSalario(): number {
        return this.salarioBase + 500;
    }
}

class Diseñador extends Empleado {
    calcularSalario(): number {
        return this.salarioBase + 300;
    }
}

class Gerente extends Empleado {
    calcularSalario(): number {
        return this.salarioBase + 1000;
    }
}

const empleado1 = new Desarrollador("Carlos", 1000);

empleado1.mostrarInformacion();
console.log("Salario total: " + empleado1.calcularSalario());

const empleado2 = new Diseñador("Ana", 1200);

empleado2.mostrarInformacion();
console.log("Salario total: " + empleado2.calcularSalario());

const gerente1 = new Gerente("Luis", 2000);

gerente1.mostrarInformacion();
console.log("Salario total: " + gerente1.calcularSalario());
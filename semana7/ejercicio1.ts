interface IVehiculo {
    encender(): void;
    mover(): void;
}

abstract class Vehiculo implements IVehiculo {
    marca: string;
    modelo: string;
    anio: number;

    constructor(marca: string, modelo: string, anio: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }

    encender(): void {
        console.log("El vehículo está encendido");
    }

    abstract mover(): void;
}

class Auto extends Vehiculo {
    mover(): void {
        console.log("El auto se mueve por la carretera");
    }
}

class Moto extends Vehiculo {
    mover(): void {
        console.log("La moto avanza rápidamente");
    }
}

const auto = new Auto("Toyota", "Corolla", 2020);

auto.encender();
auto.mover();
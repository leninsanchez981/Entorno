interface ICuenta {
    depositar(monto: number): void;
    retirar(monto: number): void;
}

abstract class CuentaBancaria implements ICuenta {
    titular: string;
    saldo: number;

    constructor(titular: string, saldo: number) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(monto: number): void {
        this.saldo += monto;
        console.log("Depósito realizado");
    }

    retirar(monto: number): void {
        if (monto > this.saldo) {
            console.log("Saldo insuficiente");
        } else {
            this.saldo -= monto;
            console.log("Retiro realizado");
        }
    }

    abstract calcularInteres(): number;
}

class CuentaAhorros extends CuentaBancaria {
    calcularInteres(): number {
        return this.saldo * 0.05;
    }
}

const cuenta = new CuentaAhorros("Juan", 1000);

cuenta.depositar(500);
cuenta.retirar(200);

console.log(cuenta.calcularInteres());
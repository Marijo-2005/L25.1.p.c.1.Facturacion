export default class Cl_Articulo {
    constructor(nombre, precio, cantidad) {
        this._nombre = nombre;
        this._precio = precio;
        this._cantidad = cantidad;
        
    }

    set nombre(n) {
        this._nombre = n;
    }

    get nombre() {
        return this._nombre;        
    }

    set precio(p) {
        this._precio = +p;
    }

    get precio() { 
        return this._precio;
    }

    set cantidad(c) {
        this._cantidad = +c;
    }

    get cantidad() {
        return this._cantidad;
    }

    subtotal() {
        return this._precio * this._cantidad;
    }
}
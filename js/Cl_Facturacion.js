export default class Cl_Facturacion {
    constructor() {
        this.acSubFactura= 0.0;
    }
    procesarArticulo(articulos) {

        this.acSubFactura += articulos.subtotal(); 
    

    }

    iva(){
        return this.acSubFactura * 0.16;
    }

    total(){
        return this.acSubFactura + this.iva();
    }

}
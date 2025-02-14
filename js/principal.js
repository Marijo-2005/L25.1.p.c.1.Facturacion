/**
 * Por cada artículo vendido se conoce su nombre, precio y cantidad. De desea conocer: a)
subtotal de cada artículo, b) subtotal de la factura, c) 16% de IVA y total de la factura al aplicarlo.
Al ser consultada por la forma como desean que se presente la salida, el peaje cardenal
suministra el siguiente formato, sobre la base de los siguientes datos:
(nombre, precio, cantidad)
(Harina, 40, 2) (Arroz, 45, 4) (Azúcar, 45, 2) (Pasta, 47.5, 3)
Subtotal del articulo 80 Bs
Subtotal del articulo 180 Bs
Subtotal del articulo 90 Bs
Subtotal del articulo 142.5 Bs
Subtotal de la factura 492.5
Monto a pagar por IVA (16%) 78.8 Bs
Total de la factura 571.3 Bs
 */

import Cl_Articulo  from "./Cl_Articulo.js";
import Cl_Facturacion from "./Cl_Facturacion.js";

let articulo1= new Cl_Articulo("Harina", 40, 2); 
let articulo2= new Cl_Articulo("Arroz", 45, 4); 
let articulo3= new Cl_Articulo("Azúcar", 45, 2); 
let articulo4= new Cl_Articulo("Pasta", 47.5, 3); 

let facturacion= new Cl_Facturacion(); 

facturacion.procesarArticulo(articulo1); 
facturacion.procesarArticulo(articulo2); 
facturacion.procesarArticulo(articulo3); 
facturacion.procesarArticulo(articulo4); 

let salida = document.getElementById("salida");

salida.innerHTML =`
Subtotal del articulo ${articulo1.subtotal()} <br>
Subtotal del articulo ${articulo2.subtotal()} <br>
Subtotal del articulo ${articulo3.subtotal()} <br>
Subtotal del articulo ${articulo4.subtotal()} <br>
Subtotal de la factura ${facturacion.total()} <br>
Monto a pagar por IVA (16%) ${facturacion.iva()} <br>
Total de la factura ${facturacion.total()} <br>

`
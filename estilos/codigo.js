// definir los descuentos

let precioProduccion = 95000;
let precioHistoria = 85000;
let precioNaturaleza = 90000;
// tomar elementos

const formulario = document.getElementById('formulario');
const categoria = document.getElementById('categoria');
const paquete = document.getElementById('paquete');
const totalPagar = document.getElementById('totalAPagar');
const btnResumen = document.getElementById('resumen');
const cantidad = document.getElementById('cantidad')

//  condicionar por descuento
// if (cantidad > 0) {
//     cantidad = cantidad
// } else {
//     alert("Deve ingresar un numero valido")
// }

function calcularPago() {

    let elecPack =0;
let descuento =0;

    switch (paquete.value) {
        case "produccion":
            elecPack = precioProduccion
            break;
        case "historia":
            elecPack = precioHistoria
            break;
        case "naturaleza":
            elecPack = precioNaturaleza
        default:
            break;
    }

    switch (categoria.value) {
        case "familias":
            descuento = 0.12
            break;
        case "escolares":
            descuento = 0.15
            break;
        case "Jubilados":
            descuento = 0.20
            break

        // default:
        //     alert("deve seleccionar descuento")
        //     break;
    }
    

    let totalPago = cantidad.value * elecPack * (1 - descuento);
    totalPagar.textContent = `Total a Pagar: $ ${totalPago}`;

}

btnResumen.addEventListener('click', (e) => {
    e.preventDefault();
    calcularPago();
});

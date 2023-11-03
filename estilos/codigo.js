// definir valor del ticket
const ticket = 200;

// definir los descuentos

let precioProduccion = 95000;
let precioHistoria = 85000;
let precioNaturaleza = 90000;
let elecPack
// tomar elementos

const formulario = document.getElementById('formulario');
const categoria = document.getElementById('categoria');
const cantidad = document.getElementById('paquete');
const totalPagar = document.getElementById('totalAPagar');
const btnResumen = document.getElementById('resumen');


//  condicionar por descuento

    switch (paquete.value) {
        case "produccion":
            elecPack=precioProduccion
            break;
            case "historia":
                elecPack=precioHistoria
            break;
        case "naturaleza":
            elecPack=precioNaturaleza
            default:
                total
                break;
            }
            
            function calcularPago(){
                let total = cantidad.value * elecPack;

                

    totalPagar.textContent = `Total a Pagar: $ ${total}`;

}

btnResumen.addEventListener('click',(e)=>{
    e.preventDefault()
    calcularPago()
});

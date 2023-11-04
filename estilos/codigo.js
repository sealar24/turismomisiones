// definir valor del ticket
//const ticket = 200;

// definir los descuentos

let precioProduccion = 95000;
let precioHistoria = 85000;
let precioNaturaleza = 90000;
let elecPack;
let descuento;
let 
// tomar elementos

const formulario = document.getElementById('formulario');
const categoria = document.getElementById('categoria');
const paquete = document.getElementById('paquete');
const totalPagar = document.getElementById('totalAPagar');
const btnResumen = document.getElementById('resumen');
const cantidad = document.getElementById('cantidad')

//  condicionar por descuento
if (cantidad>0){
    cantidad=cantidad
}else{
    alert("Deve ingresar un numero valido" )
}

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
            
switch (categoria.value) {
    case "familias":
        descuento=0.12
        break;
    case  "escolares":
        descuento=0.15
        break;
    case "Jubilados":
        descuento=.20
        break

    default:
        alert("deve seleccionar descuento")
        break;
}
            function calcularPago(){
                       let total = cantidad.value * elecPack;
            
                   }
            
            
            totalPagar.textContent = `Total a Pagar: $ ${total}`;
            


btnResumen.addEventListener('click',(e)=>{
    e.preventDefault()
    calcularPago()
});

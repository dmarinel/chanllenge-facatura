const formulario = document.getElementById("formulario");
// 
const inputNro = document.getElementById('inputNro') 
const inputRuc = document.getElementById('inputRuc')
const inputFecha = document.getElementById('inputFecha')
const inputNombreEmpresa = document.getElementById('inputNombreEmpresa')
const inputDireccion = document.getElementById('inputDireccion');


// Detalle de consumo 
const inputCant = document.getElementById('inputCant')
const selectDescripcion =document.getElementById('selectDescripcion')
const inputDescripcion = document.getElementById('inputDescripcion')
const inputPreUnit = document.getElementById('inputPreUnit')
const inputPreTotal = document.getElementById('inputPreTotal')

// Boton formulario 
const btnFormulario = document.getElementById('btnForm')
// Boton Detalle de consumo 
const btnDetalle = document.getElementById('btnDetalle')
// Llamando a tbody 
const tbody = document.getElementById('tbody')

let facturas = [];
let productos =[];


/**Eliminar producto */
const eliminarProducto = (id) => {
    productos = productos.filter((prod, i)=>{
        if(i !== id){
            return prod
        }
    }) 
   reDibujarTbody();
   
}


// Re-dibujar tbody
const reDibujarTbody = () => {
    tbody.innerHTML ='';
    let tbodyFalso = new DocumentFragment();
    productos.forEach((producto,index)=>{
        let tr = document.createElement("tr");
        let tdCant = document.createElement("td");
        tdCant.innerText =producto.cantidad;
        let tdDescrip = document.createElement("td");
        tdDescrip.innerText = producto.descripcion;
        let tdPrUnitario = document.createElement("td");
        tdPrUnitario.innerText = producto.pUnitario;
        let tdPrTotal = document.createElement("td");
        tdPrTotal.innerText = producto.pTotal;

        let tdAcciones = document.createElement("td");
        let btnEliminar = document.createElement("button");
        btnEliminar.innerText = "Eliminar";
        btnEliminar.classList.add("btnDanger")
        // Evento onClick
        btnEliminar.onclick = () => {
            
            eliminarProducto(index);
            
        }

        tdAcciones.appendChild(btnEliminar);

        tr.appendChild(tdCant);
        tr.appendChild(tdDescrip);
        tr.appendChild(tdPrUnitario);
        tr.appendChild(tdPrTotal);
        tr.appendChild(tdAcciones);
        tbody.appendChild(tr);
        tbody.appendChild(tbodyFalso);
    });

}
// Funcion para agregar producto
const agregarProducto = () => {
    let objProducto = {
    cantidad: +inputCant.value,
    descripcion: inputDescripcion.value ,
    pUnitario: +inputPreUnit.value, 
    pTotal: +inputCant.value*inputPreUnit.value,
    }
    // console.log(objProducto);
    productos.push(objProducto);
    console.log(productos);
}

// /** Seleciona producto */
// // Funcion Llenar Precio unitario
// const llenarPrecioPorDesc = (id) => {
//     const precioFiltrado = data.filter((dato) => {
//         if(id === dato.id){
//             return  dato;
//         }
//     })
//     // console.log(precioFiltrado);
//     precioFiltrado.forEach((dato)=>{
//         console.log(dato.costo);
//     })

// } 

// Funcion LLenar descripcion de PRODUCTO 
// const seleccionaProducto = () => {
//     let options = `<option value="0"> --Seleccione-- </option>`
//     data.forEach((dato) => {
//         options += `<option value="${dato.id}"> ${dato.descripcion}</option>`
//     });
//     selectDescripcion.innerHTML = options;

// }
// seleccionaProducto();

// selectDescripcion.onchange = () => {
//     let id = +selectDescripcion.value;
//     // console.log(id);
//     llenarPrecioPorDesc(id);

// }

btnDetalle.onclick = (evento) => {
    evento.preventDefault();
    console.log("clic");
    agregarProducto();
    reDibujarTbody();
}

formulario.onsubmit = (evento) => {

    evento.preventDefault();
    // console.log('Probando formulario ....');
    
    let objFactura = {
        numero: inputNro.value,
        numeroRuc: inputRuc.value,
        fecha: inputFecha.value,
        nombre:  inputNombreEmpresa.value,
        direcion:  inputDireccion.value,
        
    }
    // console.log(objFactura);
    facturas.push(objFactura);
    console.log(`Informacion defacturas`);
    console.log(facturas);
}




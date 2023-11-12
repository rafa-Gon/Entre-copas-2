const contenedorTarjetas = document.getElementById("productos-container");
const unidadesElement = document.getElementById("unidades");
const precioElement = document.getElementById("precio");
const carritoVacioElement = document.getElementById("carrito-vacio");
const totalesElement = document.getElementById("totales");
const reiniciarCarritoElement = document.getElementById("reiniciar");


function crearTargetasProductosInicio() {
    contenedorTarjetas.innerHTML = "";
    const productos = JSON.parse(localStorage.getItem("bebidas"));
    console.log(productos);
    if (productos && productos.length > 0) {
        productos.forEach(producto => {
            const nuevaBebida = document.createElement("div");
            nuevaBebida.classList = "tarjeta-producto";
            nuevaBebida.innerHTML = `
            <img src="./imagenes/productos/${producto.id}.jpg" alt="bebidas">
            <h3>${producto.nombre}</h3>
            <p>$${producto.precio}</p>
            <div>
                <button>-</button>
                <span class"cantidad">${producto.cantidad}</span>
                <button>+</button>
            </div>
            `;
        contenedorTarjetas.appendChild(nuevaBebida);
        nuevaBebida
            .getElementsByTagName("button")[1]
            .addEventListener("click", (e) => {
                
                const cuentaElement = e.target.parentElement.getElementsByTagName("span")[0];
                cuentaElement.innerText = agregarAlCarrito(producto);
                actualizarTotales()
            });
        nuevaBebida
            .getElementsByTagName("button")[0]
            .addEventListener("click", (e) => {
            restarAlCarrito(producto);
            crearTargetasProductosInicio();
            actualizarTotales()
            });

        });
    }
}

crearTargetasProductosInicio();
actualizarTotales();

function actualizarTotales(){
    const productos = JSON.parse(localStorage.getItem("bebidas"));
    let unidades = 0;
    let precio = 0;
    if(productos && productos.length>0){
        productos.forEach(producto =>{
            unidades += producto.cantidad;
            precio += producto.precio * producto.cantidad;
        })
        unidadesElement.innerText = unidades;
        precioElement.innerText = precio;
    }
    revisarMensajeVacio();
}

function revisarMensajeVacio(){
    const productos = JSON.parse(localStorage.getItem("bebidas"));
    console.log(productos, productos == true)
    carritoVacioElement.classList.toggle("escondido",productos && productos.length>0);
    totales.classList.toggle("escondido",!(productos && productos.length>0));
}

revisarMensajeVacio();

reiniciarCarritoElement.addEventListener("click",reiniciarCarrito);

function reiniciarCarrito(){
    localStorage.removeItem("bebidas");
    actualizarTotales();
    crearTargetasProductosInicio();
}

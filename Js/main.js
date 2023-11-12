const contenedorTarjetas = document.getElementById("productos-container")


function crearTargetasProductosInicio(productos){
    productos.forEach(producto => {
        const nuevaBebida = document.createElement("div");
        nuevaBebida.classList = "tarjeta-producto";
        nuevaBebida.innerHTML = `
        <img src="./imagenes/productos/${producto.id}.jpg" alt="bebidas">
        <h3>${producto.nombre}</h3>
        <p>$${producto.precio}</p>
        <button>Agregar al carrito</button>
        `
        contenedorTarjetas.appendChild(nuevaBebida);
        nuevaBebida.getElementsByTagName("button")[0].addEventListener("click",()=> agregarAlCarrito(producto));
    });
}

crearTargetasProductosInicio(bebidas);
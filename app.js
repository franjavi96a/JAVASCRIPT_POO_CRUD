class Producto {
    constructor(nombre, precio, año) {
        this.nombre = nombre,
            this.precio = precio,
            this.año = año
    }

}

class Interfaz {
    agregarProducto(producto) {
        const listaProductos = document.getElementById('product-list');
        const element = document.createElement('div');
        //insertar el elemento en la lista
        element.innerHTML = `
        <div class= "card tex-center mb-4">
            <div class="card-body">
                <strong>Producto</strong>: ${producto.nombre}
                <strong>Precio</strong>: ${producto.precio}
                <strong>Año</strong>: ${producto.año}
                <a href="#" class="btn btn-danger" name="eliminar">Eliminar</a>
            </div>
        </div>
        `;
        //agregar el elemento a la list
        listaProductos.appendChild(element);
    }


    eliminarProducto() {

    }

    mostrarMensaje() {

    }
}

// eventos del DOM
document.getElementById('product-form').addEventListener('submit',
    function (e) {
        const nombre = document.getElementById('nombre').value;
        const precio = document.getElementById('precio').value;
        const año = document.getElementById('año').value;

        const producto = new Producto(nombre, precio, año);

        e.preventDefault();
    });
class Producto {
    constructor(nombre, precio, año) {
        this.nombre = nombre,
            this.precio = precio,
            this.año = año
    }

}

class Interfaz {
    agregarProducto(producto) {
        //listar productos
        const listaProductos = document.getElementById('product-list');
        //
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

    resetFormulario() {
        document.getElementById('product-form').reset();
    }


    eliminarProducto(element) {
        if (element.name === 'eliminar') {
            element.parentElement.parentElement.remove();
            this.mostrarMensaje('Producto eliminado', 'danger');
        }
    }

    mostrarMensaje(mensaje, cssClass) {
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(mensaje));
        //mostrar en el DOM
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        container.insertBefore(div, app);
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 2000);

    }
}

// eventos del DOM
document.getElementById('product-form').addEventListener('submit',
    function (e) {
        const nombre = document.getElementById('nombre').value;
        const precio = document.getElementById('precio').value;
        const año = document.getElementById('año').value;

        //Instanciar la clase  producto
        const producto = new Producto(nombre, precio, año);

        //Instaciar la clase interfaz
        const interfaz = new Interfaz();
        if (nombre === '' || precio === '' || año === '') {
            return interfaz.mostrarMensaje('Faltan datos', 'danger');
        }

        interfaz.agregarProducto(producto);
        //
        interfaz.resetFormulario();

        interfaz.mostrarMensaje('Producto agregado', 'success');


        //Evita que el formulario se envíe y la página se recargue
        e.preventDefault();
    });

document.getElementById('product-list').addEventListener('click', function (e) {
    const interfaz = new Interfaz();
    interfaz.eliminarProducto(e.target);

});
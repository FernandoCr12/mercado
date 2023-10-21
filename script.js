document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if ((username === 'fernando' && password === '12345') ||
        (username === 'yessenia' && password === '12345') ||
        (username === 'isael' && password === '12345')) {

        var modal = document.getElementById('modal');
        var loader = document.querySelector('.loader');
        var message = document.getElementById('message');

        modal.style.display = 'flex';
        loader.style.display = 'block';

        setTimeout(function() {
            message.innerHTML = 'Datos correctos! Ingresando...';
            setTimeout(function() {
                window.location.href = 'index.html';
            }, 3000);
        }, 3000);

    } else {
        var modal1 = document.getElementById('modal1');
        var alert = document.getElementById('alert');
        alert.style.display = 'block';
        modal1.style.display = 'flex';
    }
});

document.getElementById('modal1').addEventListener('click', function() {
    this.style.display = 'none';
});
// ------------------------productos----------------------------------------

document.addEventListener('DOMContentLoaded', function() {
    const contentDiv = document.querySelector('.content');

    const addButton = document.createElement('button');
    addButton.innerText = 'Agregar Producto';
    addButton.classList.add('add-button');
    addButton.addEventListener('click', openModal);

    contentDiv.appendChild(addButton);

    function openModal() {
        const modal = document.createElement('div');
        modal.classList.add('modal');

        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-button">&times;</span>
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" required><br>

                <label for="cantidad">Cantidad:</label>
                <input type="number" id="cantidad" required><br>

                <label for="medida">Medida:</label>
                <select id="medida" required>
                    <option value="arroba">Arroba(s)</option>
                    <option value="kilo">Kilo(s)</option>
                    <option value="litro">Litro(s)</option>
                    <option value="docena">Docena(s)</option>
                    <option value="bs">Bs</option>
                </select><br>

                <label for="precio">Precio:</label>
                <input type="text" id="precio" required><br>

                <button class="save-button">Guardar</button>
            </div>
        `;

        const closeButton = modal.querySelector('.close-button');
        closeButton.addEventListener('click', closeModal);

        const saveButton = modal.querySelector('.save-button');
        saveButton.addEventListener('click', saveProduct);

        document.body.appendChild(modal);
    }

    function closeModal() {
        const modal = document.querySelector('.modal');
        modal.remove();
    }

    function saveProduct() {
        const nombre = document.getElementById('nombre').value;
        const cantidad = document.getElementById('cantidad').value;
        const medida = document.getElementById('medida').value;
        const precio = document.getElementById('precio').value;

        // Agregar lógica para guardar los datos en la tabla (puedes usar localStorage o enviar a un servidor).

        // Por ejemplo, para agregarlos a un contenedor en la página.
        const productosContainer = document.querySelector('.productos-container');
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('producto');
        productoDiv.innerHTML = `
            <div>${nombre}</div>
            <div>${cantidad}</div>
            <div>${medida}</div>
            <div>${precio}</div>
            <div class="acciones">
                <button class="editar">Editar</button>
                <button class="eliminar">Eliminar</button>
            </div>
        `;

        productosContainer.appendChild(productoDiv);

        closeModal();
    }
});



// ------------------------productos-------------------------------------------------------

// buscador 
document.addEventListener('DOMContentLoaded', function() {
    var searchInput = document.getElementById('search');
    var tableRows = document.querySelectorAll('table tr');

    searchInput.addEventListener('input', function() {
        var searchTerm = this.value.toLowerCase();
        tableRows.forEach(function(row) {
            var cells = row.getElementsByTagName('td');
            var showRow = false;

            for (var i = 0; i < cells.length; i++) {
                var cellText = cells[i].textContent.toLowerCase();

                if (cellText.indexOf(searchTerm) > -1) {
                    showRow = true;
                    break;
                }
            }

            row.style.display = showRow ? '' : 'none';
        });
    });
});

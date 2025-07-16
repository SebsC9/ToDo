const form = document.getElementById('formTarea');
const input = document.getElementById('inputTarea');
const lista = document.getElementById('listaTareas');
const eliminarLista = document.getElementById('eliminarListaBtn');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const tarea = input.value;

    if (tarea === '') {
        alert('Por favor, ingresa una tarea.');
        return;
    }

    const li = document.createElement('li');

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';

    const eliminarBtn = document.createElement('button');
    eliminarBtn.textContent = 'Eliminar';
    eliminarBtn.addEventListener('click', function() {
        lista.removeChild(li);
    });


    li.textContent = tarea;
    li.appendChild(checkBox);
    li.appendChild(eliminarBtn);
    lista.appendChild(li);

    input.value = '';
});

eliminarListaBtn.addEventListener('click', function() {
    lista.innerHTML = '';
});

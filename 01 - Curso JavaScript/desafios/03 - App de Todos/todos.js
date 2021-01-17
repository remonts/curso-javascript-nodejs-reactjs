var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

// Buscando dados do localStorage ou iniciar variavel todos vazia caso o localStorage esteja vazio
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
    //Remover conteúdo do listElement
    listElement.innerHTML = '';
    
    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo); 

        linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        
        // Procurar indice dentro do vetor todo
        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

        linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo() {
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos) {
    // Excluir o todo na posição pos, excluir 1 item por vez
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage() {
    // Salvar vetor todos no localStorage
    localStorage.setItem('list_todos', JSON.stringify(todos));
}
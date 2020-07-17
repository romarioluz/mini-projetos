let input = document.querySelector('input[name=tarefa]')

let btn = document.querySelector('#botao')

let lista = document.querySelector('#lista')


let tarefas = [
    'Jogar GTA5',
    'Estudar Python',
    'Estudar Javascript',
    'Ver um filme',
    'Ler um livro'
];

function renderizarTarefas(){
    for(tarefa of tarefas){
        //criar o item da lista
        let itemLista = document.createElement('li')

        //adicionar classe no item
        itemLista.setAttribute('class', 'list-group-item list-group-item-action');

        //criar um texto
        let itemTexto = document.createTextNode(tarefa)
        itemLista.appendChild(itemTexto)
        
        //Adicionar o item da lista na lista
        lista.appendChild(itemLista)
    }
}

renderizarTarefas()
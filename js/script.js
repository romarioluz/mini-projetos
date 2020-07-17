let input = document.querySelector("input[name=tarefa]");

let btn = document.querySelector("#botao");

let lista = document.querySelector("#lista");
let card = document.querySelector(".card");

let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [] //ele acessa o banco de dados. Põe array vazio, caso nao tenha dado

/***[
    "Jogar GTA5",
    "Estudar Python",
    "Estudar Javascript",
    "Ver um filme",
    "Ler um livro",
  ]***/

function renderizarTarefas() {
  //Limpar a listagem de itens antes de renderizar a tela
  lista.innerHTML = "";
  for (tarefa of tarefas) {
    //criar o item da lista
    let itemLista = document.createElement("li");

    //adicionar classe no item
    itemLista.setAttribute("class", "list-group-item list-group-item-action");

    //adicionar evento
    itemLista.onclick = function () {
      deletarTarefa(this);
    };

    //criar um texto
    let itemTexto = document.createTextNode(tarefa);
    itemLista.appendChild(itemTexto);

    //Adicionar o item da lista na lista
    lista.appendChild(itemLista);
  }
}

renderizarTarefas();

//Adicionar evento de click no botão
//captar o valor do input
btn.onclick = function () {
  let novaTarefa = input.value;

  if (novaTarefa.trim().length > 0) {
    //renderizar a tela novamente
    tarefas.push(novaTarefa);
    renderizarTarefas();

    //Limpar o input
    input.value = "";

    //limpar mensgens de erro (spans)
    removerSpans();
    //Salva os novos dados no banco de dados
    salvarDadosNoStorage();
  } else {
    removerSpans();

    let span = document.createElement("span");
    span.setAttribute("class", "alert alert-warning");

    let msg = document.createTextNode("Você precisa informar a tarefa!");
    span.appendChild(msg);
    card.appendChild(span);
    //limpar mensgens de erro (spans)
  }
};

function removerSpans() {
  let spans = document.querySelectorAll("span");

  for (let i = 0; i < spans.length; i++) {
    card.removeChild(spans[i]);
  }
}

function deletarTarefa(tar) {
  //remove a tarefa do array
  tarefas.splice(tarefas.indexOf(tar.textContent), 1);

  //renderiza novamente a tela
  renderizarTarefas();

  //Salva os novos dados no banco de dados
  salvarDadosNoStorage();
}

function salvarDadosNoStorage() {
  //todo navegador web possui essa funcionalidade de salvar

  localStorage.setItem("tarefas", JSON.stringify(tarefas)); //'tarefas' será o nome do banco
}

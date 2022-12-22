const botaoAdicionar = document.querySelector("[data-botao-adicionar]");
botaoAdicionar.addEventListener('click', (e) => {
    e.preventDefault();

    let campoInput = document.querySelector('[data-caixa-input]');
    let tarefa = campoInput.value;

    let novaLi = document.createElement('li');
    novaLi.innerHTML = tarefa;

    let campoLista = document.querySelector('[data-lista]');
    campoLista.appendChild(novaLi);
    novaLi.appendChild(concluirTarefa());
    novaLi.appendChild(excluirTarefa());

    campoInput.value = "";
    
})

function concluirTarefa () {
    let BotaoConclui = document.createElement('button');
    BotaoConclui.textContent = "Concluir";
    BotaoConclui.addEventListener('click', (e) => {
        let riscaTarefa = e.target;
        let tarefaquedeveserRiscada = riscaTarefa.parentElement;
        tarefaquedeveserRiscada.classList.add('riscar');
    })

    return BotaoConclui;
}

function excluirTarefa () {
    let BotaoExclui = document.createElement('button');
    BotaoExclui.textContent = "Excluir";
    BotaoExclui.addEventListener('click', (e) => {
        let ExcluirTarefa = e.target;
        let tarefaquedeveserRemovida = ExcluirTarefa.parentElement;
        tarefaquedeveserRemovida.remove();
    })

    return BotaoExclui;
}




// const botaoConcluir =() => {
//     let BotaoConclui = document.createElement('button');
//     BotaoConclui.textContent = "Concluir";
//     BotaoConclui.addEventListener('click', (e) => {
//         console.log("aaaaaaaaaaaa");
//     })

//     return BotaoConclui;

// }

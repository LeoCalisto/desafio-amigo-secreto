let nomesArmazenados = [];


function adicionarAmigo() {
    let nomeDitado = document.getElementById('amigo');
    if (nomeDitado.value == '') {
        alert('Nenhum nome digitado, por favor, digite um nome.');
    }else{
        nomesArmazenados.push(nomeDitado.value);
        nomeDitado.value = '';
        atualizarListaAmigos();
    }
    console.log(nomesArmazenados);
}

function atualizarListaAmigos(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';1
    for (const nome of nomesArmazenados) {
        listaAmigos.innerHTML += `<li>${nome}</li>`
    }
}
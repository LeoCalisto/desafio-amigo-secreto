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
    let resultado = document.getElementById('resultado');
    listaAmigos.innerHTML = '';
    for (const nome of nomesArmazenados) {
        resultado.innerHTML = '';
        listaAmigos.innerHTML += `<li>${nome}</li>`;
    }
}

function sortearAmigo() {
    let indiceAleatorio = Math.floor(Math.random() * nomesArmazenados.length);
    let resultado = document.getElementById('resultado');
    let listaAmigosExibida = document.getElementById('listaAmigos');
    if (nomesArmazenados.length == 0) {
        alert('Impossível sortear, não há amigos cadastrados.');
    }else{
        resultado.innerHTML = '';
        listaAmigosExibida.innerHTML = '';
        resultado.innerHTML = `O amigo secreto sorteado foi : ${nomesArmazenados[indiceAleatorio]}`;
        nomesArmazenados = [];
    }
}
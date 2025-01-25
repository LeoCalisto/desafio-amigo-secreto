let nomesArmazenados = [];


function adicionarAmigo() {
    let nomeDitado = document.getElementById('amigo');
    if (nomeDitado.value == '') {
        alert('Nenhum nome digitado, por favor, digite um nome.');
    }else{
        nomesArmazenados.push(nomeDitado.value);
        nomeDitado.value = '';
    }
    console.log(nomesArmazenados);
}

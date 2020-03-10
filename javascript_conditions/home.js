
function verificarNome() {

    var name = document.getElementById("nome");

    if (testarNome(name.value).fls) {
        alert('O nome é Felipe ! Você Acertou !!');
    } else {
        alert('O nome digitado não é Felipe | O nome inserido foi: ' + name.value);
        alert('O nome digitado não coincide com a resposta correta, Tente Novamente !');
    }
}

function testarNome(nome) {
    nome = nome.substring(0,1).toUpperCase().concat(nome.substring(1))

    var fls = false;
    var nmTest = false;

    if (nome.length != 6) {
        const qtdLetra = nome.length
        console.log('Estou aqui na contagem de letras')
        return { qtdLetra, fls };
    }
    if (nome == 'Carlos' || nome == 'Marcos' || nome == 'Luis' || nome == 'Junior' || nome == 'Gilberto') {
        console.log('Estou aqui no teste de nomes')
        return { nmTest, fls };

    }
    if (nome == 'Felipe') {
        return { fls: true };
    }

   
    return { fls };
}
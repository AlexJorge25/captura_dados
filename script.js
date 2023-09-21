var dadosArray = [];

function enviar_dados() {
    var nome = document.getElementById("nome-input").value;
    var email = document.getElementById("email-input").value;
    var senha = document.getElementById("senha-input").value;
    var novoDados = {
        nome: nome,
        email: email,
        senha: senha
    };
    
    dadosArray.push(novoDados);

    document.getElementById("nome-input").value = "";
    document.getElementById("email-input").value = "";
    document.getElementById("senha-input").value = "";
}
function pegar_dados() {
    var nomeProcurado = document.getElementById("nome-dados").value;
    var encontrado = false;

    for (var i = 0; i < dadosArray.length; i++) {
        var dados = dadosArray[i];
        if (dados.nome === nomeProcurado) {
            encontrado = true;
            document.getElementById("resultado-nome").innerHTML = `Nome: ${dados.nome}`;
            document.getElementById("resultado-email").innerHTML = `Email: ${dados.email}`;
            document.getElementById("resultado-senha").innerHTML = `Senha: ${dados.senha}`;
            break;
        }
    }
    
    if (!encontrado) {
        document.getElementById("resultado-email").innerHTML = "Nome não encontrado";
        document.getElementById("resultado-nome").innerHTML = "";
        document.getElementById("resultado-senha").innerHTML = "";
    }
}

/*Não deixa a tela recarregar quando clicado no botao do forms*/
var form1 = document.getElementById("forms1");

form1.addEventListener("submit", function (event) {
    event.preventDefault();
});

var form2 = document.getElementById("forms2");

form2.addEventListener("submit", function (event) {
    event.preventDefault();
});

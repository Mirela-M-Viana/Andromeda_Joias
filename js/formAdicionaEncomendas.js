var botaAdicionar = document.querySelector("#enviar_form");

botaAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
    //console.log("O botão foi clicado");

    //Captura o formulario de encomendas
    var form = document.querySelector("#formencomendas")

    //Captura os dados da nova encomenda
    var encomendaNova = obtemEncomenda(form)

    //insere a encomenda na tabela
    addEncomendaTabela(encomendaNova)

    //limpar form
    form.reset()
});

function addEncomendaTabela(novaEncomenda){
    //captura a tabela de encomedas
    var tabela = document.querySelector(".tabela-cliente")

    //Cria a nova linha na tabela
    tabela.appendChild(montaTR(novaEncomenda))
}

function obtemEncomenda(formulario){

    var encomenda = {
        nome: formulario.nome.value,
        produto: formulario.produto.value,
        qtde: formulario.qtdP.value,
        unitario: formulario.valorP.value
    }
    return encomenda;
}

// cria linha
function montaTR(dadosEncomenda){
    var tr = document.createElement("tr")

    tr.appendChild(montaTD(dadosEncomenda.nome))
    tr.appendChild(montaTD(dadosEncomenda.produto)) 
    tr.appendChild(montaTD(formataValor(parseFloat(dadosEncomenda.valorUnitario))))
    tr.appendChild(montaTD(dadosEncomenda.qtde))   
    tr.appendChild(montaTD(calcularTotal(dadosEncomenda.qtde, dadosEncomenda.valorUnitario)))

    return tr
}


//cria coluna
function montaTD(dado){
    var td = document.createElement("td")
    td.textContent = dado
    return td
}


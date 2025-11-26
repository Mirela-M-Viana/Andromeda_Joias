var botaAdicionar = document.querySelector("#enviar_form");

botaAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#formencomendas");

    var encomendaNova = obtemEncomenda(form);

    addEncomendaTabela(encomendaNova);

    form.reset();
});

function addEncomendaTabela(novaEncomenda){
    var tabela = document.querySelector(".tabela-cliente");
    tabela.appendChild(montaTR(novaEncomenda));
}

function obtemEncomenda(formulario){
    var encomenda = {
        nome: formulario.nome.value,
        produto: formulario.produto.value,
        qtde: formulario.qtdP.value,
        unitario: formulario.valorP.value  // <-- este é o nome correto
    }
    return encomenda;
}

function montaTR(dadosEncomenda){
    var tr = document.createElement("tr");

    tr.classList.add("cliente"); // IMPORTANTE para o cálculo posterior

    tr.appendChild(montaTD(dadosEncomenda.nome));
    tr.appendChild(montaTD(dadosEncomenda.produto));
    tr.appendChild(montaTD(formataValor(parseFloat(dadosEncomenda.unitario)))).classList.add("valor-unitario");
    tr.appendChild(montaTD(dadosEncomenda.qtde)).classList.add("qtde");
    tr.appendChild(montaTD(calcularTotal(dadosEncomenda.qtde, dadosEncomenda.unitario))).classList.add("valor-total");

    return tr;
}

function montaTD(dado){
    var td = document.createElement("td");
    td.textContent = dado;
    return td;
}

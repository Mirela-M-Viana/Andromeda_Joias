//Código para calcular uma linha
            // let mult_qtd_passagem = document.querySelector(".qtd").textContent * document.querySelector(".valor-passagem").textContent
            // let valorHotel = parseInt(document.querySelector(".valor-hotel").textContent)
            // document.querySelector(".valor-total").textContent = mult_qtd_passagem + valorHotel

            //Captura todas as encomendas para calcular o total
            var clientes = document.querySelectorAll(".cliente");

    for (var count = 0; count < clientes.length; count++) {
        // Captura o cliente atual
        var clientesGeral = clientes[count];

        // Captura a quantidade de produtos
        var quantidadeProduto = parseInt(clientesGeral.querySelector(".qtde").textContent);

        // Captura o valor do produto
        var valorProduto = parseInt(clientesGeral.querySelector(".valor-unitario").textContent);

        //Validação
        if(quantidadeProduto < 1 || isNaN(quantidadeProduto)){
            clientesGeral.querySelector(".qtde").textContent = "Quantidade inválida"
            clientesGeral.querySelector(".qtde").style.color= "red";
        }
        
        else {
            //calcula o valor total
            clientesGeral.querySelector(".valor-total").textContent = calcularTotal(quantidadeProduto,valorProduto);

            clientesGeral.querySelector(".valor-unitario", ".valor-total").textContent = parseFloat(valorProduto).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
        }


    }

    //FUNÇÃO
function calcularTotal(quantidadeProduto, valorProduto){
        var total = 0

        total = (quantidadeProduto * valorProduto);

        return total.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})
}
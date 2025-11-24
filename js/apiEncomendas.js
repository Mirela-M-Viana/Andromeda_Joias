var botãoAPI = document.querySelector("#apiEncomenda")

botãoAPI.addEventListener("click", function(){
    var conectaAPI = new XMLHttpRequest()
    conectaAPI.open("GET", "http://localhost:3000/encomendas_web") //Conectar com a API

    conectaAPI.addEventListener("load", function(){
        var respostaAPI = conectaAPI.responseText
        var novaEncomenda = JSON.parse(respostaAPI)
        
        novaEncomenda.forEach(function(cadaEncomenda){
            console.table(cadaEncomenda)
            addEncomendaTabela(cadaEncomenda)
        })
    })
    conectaAPI.send()
})
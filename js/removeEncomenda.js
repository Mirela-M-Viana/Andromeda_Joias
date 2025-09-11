var tabela = document.querySelector("table")

tabela.addEventListener("dblclick", function(event){
    //estilização da exclusão
    event.target.parentNode.classList.add("fadeOut")

    //exclui a linha toda
    //event.target = elemento que 'sofreu' o vento
    //parentNode = chama o elemento 'pai' do elemento que 'sofreu' o evento
    setTimeout(function(){
        event.target.parentNode.remove()
    }, 500)
    
})
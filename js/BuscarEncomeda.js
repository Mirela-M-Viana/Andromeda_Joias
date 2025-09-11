var campoBusca = document.querySelector("#buscar");

campoBusca.addEventListener("input", function () {
  var todosClientes = document.querySelectorAll(".cliente");

  if (this.value.length > 0) {
    for (var cli = 0; cli < todosClientes.length; cli++) {
      //captura a coluna do nome dos clientes
      var tdNome = todosClientes[cli].querySelector(".nome").textContent;

      var comparavel = tdNome.substring(0, this.value.length);

      //verifica se o nome do cliente é o buscado
      if (this.value.toLowerCase() != comparavel.toLowerCase()) {
        todosClientes[cli].classList.add("invisivel");
      } else {
        todosClientes[cli].classList.remove("invisivel");
      }
    }
  } else {
    for (var cli = 0; cli < todosClientes.length; cli++) {
      todosClientes[cli].classList.remove("invisivel");
    }
  }
});

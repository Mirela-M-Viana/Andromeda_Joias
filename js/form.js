var botaoEnviar = document.querySelector("#enviar");

botaoEnviar.addEventListener("click", function(event){
    event.preventDefault();

var form = document.querySelector("#frmContato");

if(form.email.value=='' && form.tel.value==''){
    return alert('Por Favor, preencha um e-mail e/ou um telefone para que eu possa retornar o seu contato.');
}else {
    MsgRetorno=form.nome.value + ", agradecemos o seu contato!";

    document.getElementById('formRetorno').style.display="block";
    document.getElementById('textoRetorno').innerHTML=MsgRetorno;
    document.getElementById('formulario').style.display="none";

    return;
    }
});
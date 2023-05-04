
function cadastrarPessoa() {

let primeiroNome = document.getElementById("firstname").value;
let sobreNome = document.getElementById("lastname").value;
let email = document.getElementById("email").value;
let celular = document.getElementById("number").value;
let senha1 = document.getElementById("password1").value;
let senha2 = document.getElementById("password2").value;


if (senha1 != senha2){
  alert( "A senha e confirmacao de senha nao sao iguais, tente novamente!")
  senha1 = ""
  senha2= ""
} else if (senha1 == "" || primeiroNome == "" || email == "" ){
    alert( "Preencha todos os dados obrigatórios para cadastro!")
} else {

  let listaClientes = JSON.parse(localStorage.getItem('listaClientes') || '[]')
  listaClientes.push(
  {
    nome:primeiroNome,
    ultimoNome:sobreNome,
    email:email,
    telefone:celular,
    senha:senha1
  }
  )

  localStorage.setItem('listaClientes', JSON.stringify(listaClientes))

  window.location.href ='../index.html'
  alert("Pessoa cadastrada com sucesso!")


}

}

  



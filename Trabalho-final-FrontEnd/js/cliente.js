
if(localStorage.getItem('token') == null) {
   alert('Voce precisa logar antes para acessar esssa página')
    window.location.href ='../index.html'    
}


function consultarCep(){

  let cep = document.getElementById('cep').value

  if (cep.length != 8 ){
    alert('Cep inválido')
    return
  }

  let url = `https://viacep.com.br/ws/${cep}/json/`

// o fecth recebe uma promisse
// primeiro then serve para transformar promisse 
// segundo then serve para json em objeto.
  fetch(url).then(function(response){
    response.json().then(mostrarDados);
  })

}



function mostrarDados(dados){

  let resultado = document.getElementById('resultado')
  
  if (dados.erro){
    resultado.innerHTML = '<p> Endereço inválido em nossa base de dados, verifique o cep digitado!</p>'
  } else {
    resultado.innerHTML=  `<table class="container">
                          <thead>
                            <tr>
                              <th><h3>Endereço</h3></th>
                              <th><h3>Bairro</h3></th>
                              <th><h3>Cidade</h3></th>
                              <th><h3>UF</h3></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>${dados.logradouro}</td>
                              <td> ${dados.bairro}</td>
                              <td>${dados.localidade}</td>
                              <td>${dados.uf} </td>
                            </tr>
                            <tr>
                          </tbody>
                        </table>`
    
    
    

  
  }
}

function limparDados(){

  let resultado = document.getElementById('resultado')

  resultado.innerHTML=  `<table class="container">
                          <thead>
                            <tr>
                              <th><h3>Endereço</h3></th>
                              <th><h3>Bairro</h3></th>
                              <th><h3>Cidade</h3></th>
                              <th><h3>UF</h3></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                          </tbody>
                        </table>`

resultado = ''
}



function sairLogin(){
    
    localStorage.removeItem('token')
    window.location.href ='../index.html'
  
  }
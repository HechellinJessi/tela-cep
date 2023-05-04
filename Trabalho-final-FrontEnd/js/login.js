

 function mostrarSenha(){ 

   let olho = document.getElementById("password").type;

   if ( olho == "password") {
     olho = document.getElementById("password").type = "text"

   } else {
     olho = document.getElementById("password").type = "password";
   }
 }

function validarLogin(){

  let usuario = document.getElementById('email').value
  let senha = document.getElementById('password').value

  if(senha != '' && usuario != '') {
  
    let listaClientes =[];

    let userValid = {
      email:'',
      senha:''
    }

      listaClientes = JSON.parse(localStorage.getItem('listaClientes'))
      
      listaClientes.forEach( (item)=> {
        if(usuario == item.email && senha == item.senha){
    
            userValid = {
              email:item.email,
              senha: item.senha,
            }
          }
    
        });

      if (userValid.email == '' || userValid.senha == ''){
        alert ( "Senha ou login iválidos!")
        senha = ''
        usuario = ''
      } else {
        let token = Math.random().toString(16).substring(2)+ Math.random().toString(16).substring(2)
        localStorage.setItem('token',token)
        alert("Seu token foi validado e voce será redirecionado!")
        window.location.href ='../cliente.html'
        senha = ''
        usuario = ''
      }
    
  } else {
    alert("Preencha todos os dados!")
  }


}

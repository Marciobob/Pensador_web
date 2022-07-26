console.log('Entrada')

function fechar(params) {
  console.log('criar input categoria')
  const btn_fechar = document.getElementById("btn_fechar")  
  const box_cliente = document.getElementById("box_cliente")
  const box_beneficio = document.getElementById("box_beneficio")
  const box_endereco = document.getElementById("box_endereco")
  const box_telefone = document.getElementById("box_contato")
  const linha = document.getElementById("linha")
  const linha1 = document.getElementById("linha1")

  btn_fechar.style.display= 'none'
  box_cliente.style.display= 'none'
  box_beneficio.style.display= 'none'
  box_endereco.style.display= 'none'
  box_telefone.style.display= 'none' 
  linha.style.display= 'none' 
  linha1.style.display= 'none' 

  
}
function criahtml(data) {
  
  console.log('criar input categoria')
  const btn_fechar = document.getElementById("btn_fechar")  
  const box_cliente = document.getElementById("box_cliente")
  const box_beneficio = document.getElementById("box_beneficio")
  const box_endereco = document.getElementById("box_endereco")
  const box_telefone = document.getElementById("box_contato")
  const linha = document.getElementById("linha")
  const linha1 = document.getElementById("linha1")

  btn_fechar.style.display= 'block'
  box_cliente.style.display= 'flex'
  box_beneficio.style.display= 'flex'
  box_endereco.style.display= 'flex'
  box_telefone.style.display= 'flex' 
  linha.style.display= 'flex' 
  linha1.style.display= 'flex' 

 
  const txtdata = data
  
  const cpf = txtdata.cpf
  const nome = txtdata.nome
  const nasc =  txtdata.nascimento
  const idade =  txtdata.idade

  const beneficio = txtdata.beneficio
  const salario =  txtdata.salario
  const margen =  txtdata.margen

  const endereco = txtdata.endereco
  const bairro = txtdata.bairro
  const cidade =  txtdata.cidade
  const uf =  txtdata.uf

  const telefone =  txtdata.telefone


  box_cliente.innerHTML=`
  <h1>Dados pessoais</h1>
  <strong>Nome</strong><p>${nome}</p> 
  <strong>Cpf</strong><p>${cpf}</p>
  <strong>Nascimento</strong><p>${nasc}</p>
  <strong>Idade</strong><p>${idade} anos</p>`

  
  box_beneficio.innerHTML=`
  <h1>Dados beneficio</h1>
  <strong>Beneficio</strong><p>${beneficio}</p> 
  <strong>Salário</strong><p>$${salario},00</p>
  <strong>Margem</strong><p>$${margen}</p>`

  box_endereco.innerHTML=`
  <h1>Dados endereço</h1>
  <strong>Endereço</strong><p>${endereco}</p> 
  <strong>Bairro</strong><p>${bairro}</p>
  <strong>Cidade</strong><p>${cidade},00</p>
  <strong>Uf</strong><p>${uf}</p>`

  box_telefone.innerHTML=`
  <h1>Contatos</h1>
  <strong>Telefone</strong><p>${telefone}</p>`

  box_cliente.classList.add("boxloguin2")


}





function enviar(cpf){
  //alert("aquiiiii2222"+numero+value+rua+hora+dataAtual)
   if(typeof(Storage)!="undefine"){
          
          var token = localStorage.getItem("token")
          
          body ={
            "token":token,
            'cpf':parseInt(cpf),
          }
   }else{
     window.open("https://marciobob.github.io/frontEmprestimo/Loguin/Loguin.html", "self")

   }
  
   
  var url = "http://143.244.179.118:5000/pesquisa_beneficio"
  var bory = JSON.stringify(body)
  console.log("sou bary"+bory)
  
  fetch(url, {method:"POST", body: bory})
  .then(function(response){
    response.json()
    .then(function(data){
      
      if(data){
        console.log(data)
        criahtml(data)
      }else{
        alert("Desculpe!!\nHorario já cadastrado hoje!!!")
      }
    })
  })
}

function pegacpf() {
  

  var cpf = document.getElementById("cpfloguin").value;
    

  if(cpf){
  
    enviar(cpf)
    
  }else{
    alert("Senha ou email invalidos!!")
  }
}


var botao_loguin = document.getElementById("btn")
var botao_fechar = document.getElementById("btn_fechar")

botao_loguin.addEventListener("click", pegacpf);
botao_fechar.addEventListener("click", fechar);


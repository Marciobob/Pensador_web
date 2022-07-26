console.log("logado")

function logado(){
  if(typeof(Storage)!="undefine"){

    if(localStorage.token){

      window.open("../Home/Home.html")
    }
  }
}

window.addEventListener("load", logado);

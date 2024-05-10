function insert(num){
    var numero = document.getElementById('results').innerHTML;

    document.getElementById('results').innerHTML = numero + num;

}

function clean(){
    document.getElementById('results').innerHTML = "";
}

function back(){
    var resultado = document.getElementById('results').innerHTML;
    document.getElementById('results').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular(){

    var resultado = document.getElementById('results').innerHTML;
    if(resultado){
        document.getElementById('results').innerHTML = eval(resultado);
    }else{
        document.getElementById('results').innerHTML = "Nada...";
    }
}



let buttonAceitar = document.getElementById("buttonAceitar");
buttonAceitar.addEventListener("click", aceitaCookie);

if(localStorage.getItem("aceitouCookie" == "1")) {
  aceitaCookie();
}

function aceitaCookie() {
  let divMsg = document.getElementById("ID_Cookie");
  divMsg.classList.add("oculto");

  localStorage.setItem("aceitouCookie", "1")
}

document.getElementById("buttonAceitar").addEventListener("click", function() {
  document.getElementById("ID_Cookie").style.display = "none";
});
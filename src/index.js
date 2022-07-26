import cipher from './cipher.js';

const botaoCifrar = document.getElementById("codifica");

botaoCifrar.addEventListener ("click",cifrar); 

function cifrar (e) {
  let valorDeslocamento = parseInt(document.getElementById("numero").value);
  let valorMsg = document.getElementById("msg").value; 
  valorMsg = valorMsg.toUpperCase();
  let resultado = cipher.encode(valorDeslocamento,valorMsg);
  e.preventDefault();
  
document.getElementById("resultado").innerText = resultado; 

};

const botaoDecifrar = document.getElementById("decodifica");

botaoDecifrar.addEventListener ("click",decifrar);

function decifrar (e) {
  let valorDeslocamento = parseInt(document.getElementById("numero").value);
  let valorMsg = document.getElementById("msg").value;
  valorMsg = valorMsg.toUpperCase();
  let resultado = cipher.decode(valorDeslocamento,valorMsg);
  e.preventDefault();

  document.getElementById("resultado").innerText = resultado;

};

//Minha primeira resolução usando onclick=funcao() no html e desenvolvendo a funcao no js

// document.getElementById("codifica").onclick = function codificar() {
//   const mensagem_codificar = document.getElementById("msg")
//   const mensagem_para_codificar = String (mensagem_codificar.value)
//   alert(mensagem_para_codificar)
// }


// document.getElementById("decodifica").onclick = function decodificar ()
// {
//  const mensagem_decodificar = document.getElementById("msg")
//  const mensagem_para_decodificar = String (mensagem_decodificar.value)
//  alert(mensagem_para_decodificar)

// }


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

}

const botaoDecifrar = document.getElementById("decodifica");

botaoDecifrar.addEventListener ("click",decifrar);

function decifrar (e) {
  let valorDeslocamento = parseInt(document.getElementById("numero").value);
  let valorMsg = document.getElementById("msg").value;
  let resultado = cipher.decode(valorDeslocamento,valorMsg);
  e.preventDefault();

  document.getElementById("resultado").innerText = resultado;

}

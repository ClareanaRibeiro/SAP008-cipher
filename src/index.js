import cipher from './cipher.js';

console.log(cipher);


const botaoCifrar = document.getElementById("codifica");

botaoCifrar.addEventListener ("click",cifrar); 

function cifrar (e) {
  let valorDeslocamento = document.getElementById("numero").value;
  let valorMsg = document.getElementById("msg").value; 
  let resultado = cipher.encode(valorDeslocamento,valorMsg);
  e.preventDefault();
  
  console.log(resultado);

};

const botaoDecifrar = document.getElementById("decodifica");

botaoDecifrar.addEventListener ("click",decifrar);

function decifrar (e) {
  let valorDeslocamento = document.getElementById("numero").value;
  let valorMsg = document.getElementById("msg").value; 
  let resultado = ciphertwo.decocode(valorDeslocamento,valorMsg);
  e.preventDefault();
  
  console.log(resultado);
};



//Dúvidas:
//1) console.log > ir na pag e inspecionar - console - 
//essa melhor maneira?
//2) Cód tá certo? O botao decodificar não está funcionando. Se sim:
//   - dica p/ qual proxima etapa p criar o chiper.encode?









//Codigo da Isabella adaptado ao meu
//const botaoDecifrar = document.getElementById("decodifica");

//botaoDecifrar.addEventListener ("click", function(e){

 // e.preventDefault();

 // let valorDeslocamento = document.getElementById("numero").value
 // let valorMsg = document.getElementById("msg").value
 // let resultado = chiper.decode(valorDeslocamento,valorMsg)
//})


//cod feito com a Thali
//const botaoNumero = document.getElementById("botao_enviar") = não existe mais esse botao

//function clicar() {
  //let numeroDeslocamento = document.getElementById("numero")
  //alert(numeroDeslocamento.value)
   //}

//botaoNumero.addEventListener("click", clicar)




//Minha primeira resolução usando onclick=funcao() no html e desenvolvendo a funcao no js

// document.getElementById("botao_enviar").onclick = function  clicar() {
//     const botao_1 = document.getElementById("numero") = esse botao não existe mais
//     const numero_deslocamento = Number (botao_1.value)
//     alert(numero_deslocamento) //criei esse alert só p ver se salvou o conteudo do q foi inserido no input
// }

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


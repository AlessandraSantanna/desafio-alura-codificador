




const textArea=document.querySelector(".input-text");
const mensagem =document.querySelector(".mensagem");


function btnEncriptar(){
    const textoEncriptado= encriptar(textArea.value);
    mensagem.value=textoEncriptado;
    textArea.value="";

}



function encriptar(stringEncriptada){

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "obter"], ["u", "ufat"] ]
    stringEncriptada = stringEncriptada.toLowerCase();

for (let i= 0; i < matrizCodigo.length; i++){
     if (stringEncriptada.includes(matrizCodigo[i][0])){
       stringEncriptada=stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo [i][1]);
     }
}
 return stringEncriptada;


}
function btnDesencriptar(){
  const textoDesencriptado= desencriptar(textArea.value);
  mensagem.value=textoDesencriptado;
  textArea.value="";

}



function desencriptar(stringDesencriptada){

  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "obter"], ["u", "ufat"] ]
  stringDesencriptada = stringDesencriptada.toLowerCase();

for (let i= 0; i < matrizCodigo.length; i++){
   if (stringDesencriptada.includes(matrizCodigo[i][1])){
     stringDesencriptada=stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo [i][0]);
   }
}
return stringDesencriptada;
}

function copiarTexto() {
  let alerta = document.getElementById("mensagemAlerta")
	let textoASerCopiado = document.querySelector(".mensagem")

	textoASerCopiado.select()
	textoASerCopiado.setSelectionRange(0, 9999);

	navigator.clipboard.writeText(textoASerCopiado.value);

	alerta.textContent = "Texto copiado!"

	limparTexto()
}

/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/

/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/
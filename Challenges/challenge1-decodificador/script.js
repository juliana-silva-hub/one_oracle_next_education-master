//Vari�veis para guardar os textos da textarea1 e 2.
let texto = document.getElementById("areatext1");
let texto1 = document.getElementById("areatext2");
//Vari�veis para guardar as mensagens da textarea2.
let mensagem1 = document.querySelector("mensagem");
let mensagem2 = document.querySelector("paragrafo");
//Vari�veis dos bot�es
let botaoCriptografar = document.getElementById("criptografar");
let botaoDesriptografar = document.getElementById("descriptografar");
let botaoCopiar = document.getElementById("copiar");

//vari�vel para a imagem da textarea2.
let imagem = document.querySelector("#resultado img");

//botoes com a fun��o onclick
botaoCriptografar.onclick = criptografa;
botaoDesriptografar.onclick = descriptografa;
botaoCopiar.onclick = copiar;


//Fun��o para criptografar
function criptografa() {
    let textoCriptografado = texto.value;

    let resultado = textoCriptografado
        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat");

    texto1.value = resultado;

    //C�digo que faz sumir os elementos assim que a fun��o � chamada.
    imagem.style.display = "none";
    mensagem.style.display = "none";
    paragrafo.style.display = "none";
}
//Fun��o para descriptografar
function descriptografa() {
    let textoCriptografado = texto.value;

    let resultado = textoCriptografado
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ai", "a")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u");

    texto1.value = resultado;
}

//Fun��o para copiar
function copiar() {
    conteudo = document.getElementById("areatext2");

    conteudo.select();
    document.execCommand("cut");
    alert("Texto copiado.");

}

let carateres = texto1.length;

if (carateres >= 1) {

} else {
    imagem.style.display = "block";
}




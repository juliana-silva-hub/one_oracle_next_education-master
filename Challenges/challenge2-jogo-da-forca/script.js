//palavras iniciais:
palavras = ["HISTORIA", "CASCAVEL", "ORACULO", "VENCEDOR", "COLAR", "VISCOSE","BABOSA", "MELANCIA", "CLUBE", "IGREJA", "BIBLIA", "HORTA"];
//menu principal
const menuPrincipal = document.getElementById("menu-principal");
// botao começar a jogar:
const btnIniciarGame = document.querySelector("#iniciar");
//botao adicionar palavra:
const btnAdiciona = document.getElementById("adicionarpalavra");
// menu de adicionar novas palavras:
const menuAdiciona = document.getElementById("adicionar-palavra");
// botao salvar e começar:
const btnSalvarComecar = document.getElementById("salvar");
// botao cancelar:
const btnCancelar = document.getElementById("cancelar");
// menu tabuleiro:
const menuTabuleiro = document.getElementById("tabuleiro");
// botao desistir:
const desistir = document.getElementById("desistir");
// botao novo jogo:
const novoJogo = document.getElementById("novoJogo");
// ul:
const ul = document.querySelector("ul");
// text area:
let novaPalavra = document.getElementById("entrada-texto");
//popup
const popup = document.querySelector(".popup-wrapper");
// mensagem fim de jogo:
let mensagemFim = document.getElementById("mensagemFim");
console.log(mensagemFim);

const teclado = document.querySelectorAll(".btn-letras")


var paginaAtual = menuPrincipal;

var palavra;

var letrasErradas = [];
var letrasCorretas = [];
var fimDeJogo = false;

 // ATRIBUINDO FUNÇÃO AO TECLADO DA VERSÃO MOBILE:   
for(z = 0; z < teclado.length; z++) {
    teclado[z].addEventListener('click', function(){
        let letras = document.querySelectorAll("li");
        let letra = this.value;
            if(!letrasErradas.includes(letra)){
                if(palavra.includes(letra)){
                    letrasCorretas.push(letra);
                } else {
                    letrasErradas.push(letra);
                    desenhaForca();
                }
                for(i=0;i<palavra.length;i++){
                    if(letra===palavra[i]){
                        letras[i].textContent = letra;
                    }     
                }   
            }
            mostrarLetrasErradas();
            verificaFimDeJogo();
            
    })
}


// configurando evento ao clicar no botao "COMEÇAR A JOGAR":
btnIniciarGame.addEventListener("click", function(){
    reiniciaCanvas();
    sorteia();
    tornarInvisivel(paginaAtual);
    removerInvisivel(menuTabuleiro);
    desenhaTraco(palavra);
    paginaAtual = menuTabuleiro;
    let letras = document.querySelectorAll("li");
    // configurando evento ao digitar letra:
    document.addEventListener("keydown", function(event,keyCode){
        let codigo = event.keyCode;
        if(validaLetra(codigo)){
            let letra = event.key.toUpperCase();
            if(!letrasErradas.includes(letra)){
                verificaLetraCorretaErrada(letra,palavra,letras,letrasCorretas,letrasErradas);   
            }
            mostrarLetrasErradas();
            verificaFimDeJogo();
    
        }
    })
    })

// configurando evento ao clicar no botao "ADICIONAR NOVA PALAVRA":
btnAdiciona.addEventListener("click", function(){
    tornarInvisivel(paginaAtual);
    removerInvisivel(menuAdiciona)
    paginaAtual=menuAdiciona;
    document.getElementById("entrada-texto").focus();
})

// configurando evento ao clicar no botao "CANCELAR":
btnCancelar.addEventListener("click",function(){
    tornarInvisivel(paginaAtual);
    removerInvisivel(menuPrincipal);
    paginaAtual = menuPrincipal;
})

// configurando evento ao clicar no botão "SALVAR E COMEÇAR":
btnSalvarComecar.addEventListener("click", function(){
    let novaPalavra = document.getElementById("entrada-texto");
    if(novaPalavra.value.length>0){
        
        reiniciaCanvas();
        letrasErradas=[];
        acertos=[];
        ul.innerHTML=""
        adicionaPalavra();
        sorteia();
        tornarInvisivel(paginaAtual);
        removerInvisivel(menuTabuleiro);
        desenhaTraco(palavra);
        paginaAtual = menuTabuleiro;
        let letras = document.querySelectorAll("li");
        // configurando evento ao digitar letra:
        document.addEventListener("keydown", function(event,keyCode){
            let codigo = event.keyCode;
            if(validaLetra(codigo)){
                let letra = event.key.toUpperCase();
                if(!letrasErradas.includes(letra)){
                    verificaLetraCorretaErrada(letra,palavra,letras,letrasCorretas,letrasErradas);   
                }
                mostrarLetrasErradas();
                verificaFimDeJogo();                
            }
        })

    } else {
        alert("Por favor digite uma palavra válida!")
    }
    
})

// configurando evento ao clicar no botão Novo Jogo:
novoJogo.addEventListener("click", function(){
    reiniciaCanvas();
    letrasErradas=[];
    acertos=[];
    ul.innerHTML="";
    sorteia();
    desenhaTraco(palavra);
    tornarInvisivel(popup);
    let letras = document.querySelectorAll("li");
    document.addEventListener("keydown", function(event,keyCode){
        let codigo = event.keyCode;
        if(validaLetra(codigo)){
            let letra = event.key.toUpperCase();
            if(!letrasErradas.includes(letra)){              
                verificaLetraCorretaErrada(letra,palavra,letras,letrasCorretas,letrasErradas);      
            }
            verificaFimDeJogo();
            mostrarLetrasErradas();
        }
    })
})

// configurando evento ao clicar no botão desistir:
desistir.addEventListener("click",function(){
    letrasErradas=[];
    acertos=[];
    ul.innerHTML="";
    tornarInvisivel(paginaAtual);
    tornarInvisivel(popup);
    removerInvisivel(menuPrincipal);
    paginaAtual=menuPrincipal;
})




// criando função que sorteia uma palavra dentre as palavras armazenadas:
function sorteia(){
    let indice = Number(Math.floor(Math.random()*palavras.length));
    palavra=palavras[indice]; 
    return palavra;   
}

// criando função de tornar invisivel a seção:

function tornarInvisivel(section){
    section.classList.add("invisivel");
}

// criando função de tornar visivel a seção:
function removerInvisivel(section){
    section.classList.remove("invisivel");
}

// criando função que adiciona uma nova palavra:

function adicionaPalavra(){
    let novaPalavra = document.getElementById("entrada-texto");
    palavras.push(novaPalavra.value.toUpperCase());
}

// criando função que desenha os traços:
function desenhaTraco(palavra){
    let ul = document.getElementById("lista");
    for(i=0;i<palavra.length;i++){
       let li = document.createElement("li");
       li.textContent="___";
       ul.appendChild(li);
    }
}

// criando função que valida letra:

function validaLetra(codigo){
    return codigo>=65 && codigo<=90;
}

// criando função que mostra letras erradas:

function mostrarLetrasErradas(){
    let divLetraErrada = document.querySelector(".letrasErradas")
    divLetraErrada.innerHTML='<h2>Letras Erradas:</h2>';
    letrasErradas.forEach(letra=>{
        divLetraErrada.innerHTML+=letra;
    })
}

// criando função que verifica se jogo terminou:

function verificaFimDeJogo(){
    let mensagem = "";
     if(palavra==ul.innerText){
   
        mensagem="Parabéns, você ganhou!";
        
    }
    if(mensagem){
        setTimeout(function(){
            removerInvisivel(popup);
            mensagemFim.textContent= mensagem;
        },500) 

        
    }

}

// reiniciar jogo:
function reiniciarJogo(){
    window.location.reload();
}

// validando dados do textarea:
novaPalavra.addEventListener("keypress", function(e){
    if(!checkChar(e)){
        e.preventDefault();
    }
});

//função que valida o formulario:
function checkChar(e) {
    const char = String.fromCharCode(e.keyCode);
    console.log(char);
    const pattern = '[a-zA-Z]';

    if(char.match(pattern)){
        return true;
    }
}

// criando função que verifica letra certa ou errada, e desenha no canvas caso errada
function verificaLetraCorretaErrada(letra,palavra,letras,letrasCorretas,letrasErradas){
    if(palavra.includes(letra)){
        letrasCorretas.push(letra);
    } else {
        letrasErradas.push(letra);
        desenhaForca();
    }
    for(i=0;i<palavra.length;i++){
        if(letra==palavra[i]){
            letras[i].textContent = letra;
        }     
    }  
}





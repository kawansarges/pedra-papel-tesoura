import { Caixamsg } from "./resultado.js";
const areaOpcoesPlayer = document.getElementById('areaOpcoesPlayer').children;
const imgOpcoes = document.getElementById('imgResult')

const resultados = [
    {
        titulo:'Você ganhou!',
        texto: 'Você conseguiu derrotar seu oponente!',
        cor:['#4e57a5','#6bbbd3']
    },
    {
        titulo:'Você perdeu!',
        texto: 'Seu oponete conseguiu derrotar você!',
        cor:['#a5514e','#d36b6b']
    },
    {
        titulo:'Empate!',
        texto: 'Você empatou com seu oponente!',
        cor:['#a5824e','#d3b26b']
    }
]

// configurando a lógica do jogo
function quemGanhou(){
    const jogadas = document.getElementById('imgResult')
    const player = jogadas.children[0].dataset.nome
    const maquina = jogadas.children[1].dataset.nome
    
    if(player == 'pedra'){
        if(maquina=='pedra'){
            setTimeout(function(){
                Caixamsg.chamarResultado(resultados[2]);
                jogadas.innerHTML=''
            },2000)
        }else if(maquina=='papel'){
            setTimeout(function(){
                Caixamsg.chamarResultado(resultados[1]);
                jogadas.innerHTML=''
            },2000)
        }else if(maquina=='tesoura'){
            setTimeout(function(){
                Caixamsg.chamarResultado(resultados[0]);
                jogadas.innerHTML=''
            },2000)
        }
    }else if(player == 'papel'){
        if(maquina=='pedra'){
            setTimeout(function(){
                Caixamsg.chamarResultado(resultados[0]);
                jogadas.innerHTML=''
            },2000)
        }else if(maquina=='papel'){
            setTimeout(function(){
                Caixamsg.chamarResultado(resultados[2]);
                jogadas.innerHTML=''
            },2000)
        }else if(maquina=='tesoura'){
            setTimeout(function(){
                Caixamsg.chamarResultado(resultados[1]);
                jogadas.innerHTML=''
            },2000)
        }
    }else if(player == 'tesoura'){
        if(maquina=='pedra'){
            setTimeout(function(){
                Caixamsg.chamarResultado(resultados[1]);
                jogadas.innerHTML=''
            },2000)
        }else if(maquina=='papel'){
            setTimeout(function(){
                Caixamsg.chamarResultado(resultados[0]);
                jogadas.innerHTML=''
            },2000)
        }else if(maquina=='tesoura'){
            setTimeout(function(){
                Caixamsg.chamarResultado(resultados[2]);
                jogadas.innerHTML=''
            },2000)
        }
    }
}

// Configurando jogada da máquina
function jogadaMaquina(){
    const opcoesCode = Math.floor(Math.random()*3)
    const opcoes = ['pedra','papel','tesoura']
    const img = document.createElement('img')
    img.setAttribute('src','img/'+opcoes[opcoesCode]+'.png')
    img.setAttribute('data-nome',opcoes[opcoesCode])
    imgOpcoes.appendChild(img)

    quemGanhou()
}

// configurando a jogado do player
function jogadaPlayer(opcao){
    const img = document.createElement('img')
    img.setAttribute('src','img/'+opcao+'.png')
    img.setAttribute('data-nome',opcao)
    imgOpcoes.appendChild(img)
    jogadaMaquina()
}

// adicionando as jogadas nos botões do player
for(var i = 0; i < areaOpcoesPlayer.length; i++){
    areaOpcoesPlayer[i].addEventListener('click',function(el){
        const opcao = el.target.value
        jogadaPlayer(opcao)

    })
}